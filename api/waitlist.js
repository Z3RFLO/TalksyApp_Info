// Vercel serverless function: /api/waitlist.js
// Receives { name, email, phone } via POST and forwards to Telegram Bot API

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
      return;
    }

    // Parse body - Vercel passes parsed body when Content-Type: application/json
    const body = req.body || (await parseBody(req));
    const { name, email, phone } = body || {};

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Invalid name' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email' });
    }
    if (phone && typeof phone !== 'string') {
      return res.status(400).json({ success: false, error: 'Invalid phone' });
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({ success: false, error: 'Bot credentials not configured' });
    }

    const message = formatTelegramMessage({ name: name.trim(), email: email.trim(), phone: phone ? phone.trim() : 'Not provided' });

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const resp = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'HTML' })
    });

    const data = await resp.json();

    if (!resp.ok || !data.ok) {
      const errMsg = data && data.description ? data.description : 'Telegram API error';
      return res.status(502).json({ success: false, error: errMsg });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('waitlist error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Internal error' });
  }
}

// Helper: sometimes Vercel provides raw req without parsed body; this will attempt to parse it safely
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        const parsed = JSON.parse(body);
        resolve(parsed);
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', (err) => reject(err));
  });
}

function formatTelegramMessage(data) {
  return `\n📝 <b>New Waitlist Signup!</b>\n\n👤 <b>Name:</b> ${escapeHtml(data.name)}\n📧 <b>Email:</b> ${escapeHtml(data.email)}\n📞 <b>Phone:</b> ${escapeHtml(data.phone || 'Not provided')}\n\n⏰ <b>Submitted:</b> ${new Date().toLocaleString()}\n`.trim();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

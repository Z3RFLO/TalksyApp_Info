import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// ============================================================================
// MIDDLEWARE
// ============================================================================
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// ============================================================================
// HEALTH CHECK ROUTE
// ============================================================================
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// ============================================================================
// WAITLIST SUBMISSION ROUTE
// ============================================================================


function formatTelegramMessage(data) {
  // Customize the message format sent to Telegram
  return `
 <b>New Waitlist Signup!</b>

 <b>Name:</b> ${data.name}
 <b>Email:</b> ${data.email}
 <b>Phone:</b> ${data.phone || 'Not provided'}

 <b>Submitted:</b> ${new Date().toLocaleString()}
  `.trim();
}

app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // ========================================================================
    // VALIDATION
    // ========================================================================
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Name is required and must be a non-empty string'
      });
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Valid email address is required'
      });
    }

    // phone is optional, but validate if provided
    if (phone && typeof phone !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Phone must be a string'
      });
    }

    // ========================================================================
    // SEND TO TELEGRAM
    // ========================================================================
    const telegramMessage = formatTelegramMessage({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : ''
    });

    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const telegramResponse = await axios.post(telegramApiUrl, {
      chat_id: CHAT_ID,
      text: telegramMessage,
      parse_mode: 'HTML' // Enable HTML formatting
    }, {
      timeout: 10000 // 10 second timeout
    });

    if (!telegramResponse.data.ok) {
      throw new Error('Telegram API returned error: ' + telegramResponse.data.description);
    }

    // ========================================================================
    // SUCCESS RESPONSE
    // ========================================================================
    res.json({
      success: true,
      message: 'Submitted successfully'
    });

  } catch (error) {
    console.error('Error in /api/waitlist:', error.message);

    // Determine appropriate error message
    let errorMessage = 'An error occurred while processing your request';
    
    if (error.response?.status === 401) {
      errorMessage = 'Telegram authentication failed. Check BOT_TOKEN.';
    } else if (error.response?.status === 404) {
      errorMessage = 'Telegram chat not found. Check CHAT_ID.';
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout. Please try again.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage
    });
  }
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================================================
// ERROR HANDLING
// ============================================================================
app.use((err, req, res, next) => {
  console.error('Unexpected error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// ============================================================================
// START SERVER
// ============================================================================
app.listen(PORT, () => {
  // Minimal startup log to keep terminal output concise
  console.log(`Talksy waitlist backend listening: http://localhost:${PORT} (POST /api/waitlist)`);
});

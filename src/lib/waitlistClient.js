// Simple frontend helper to POST to the serverless endpoint /api/waitlist
export async function submitWaitlist({ name, email, phone }) {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Request failed');
  }

  return res.json(); // { success: true }
}

// Example usage in React:
// import { submitWaitlist } from '../lib/waitlistClient';
// try { await submitWaitlist({ name, email, phone }); alert('Sent'); } catch(e) { alert(e.message); }

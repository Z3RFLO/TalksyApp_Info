import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useWaitlistModal } from '../contexts/WaitlistModalContext';

export default function WaitlistModal() {
  const { isOpen, closeModal } = useWaitlistModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  // Edit this URL if backend is deployed elsewhere
  const BACKEND_URL = 'http://localhost:5000/api/waitlist';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    try {
      if (!formData.name.trim()) {
        setStatus({
          loading: false,
          message: 'Please enter your name',
          type: 'error'
        });
        return;
      }

      if (!formData.email.trim()) {
        setStatus({
          loading: false,
          message: 'Please enter your email',
          type: 'error'
        });
        return;
      }

      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim()
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          message: ' You\'re on the waitlist! Check your inbox for updates.',
          type: 'success'
        });
        setFormData({ name: '', email: '', phone: '' });
        
        // Auto close after 2 seconds
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setStatus({
          loading: false,
          message: `❌ ${data.message || 'Submission failed'}`,
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        loading: false,
        message: '❌ Network error. Make sure backend is running.',
        type: 'error'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            // Use full-screen centered flexbox so the modal can adapt to small viewports
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-2xl"
                 style={{ maxHeight: '90vh', overflow: 'hidden' }}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content area: make this scrollable if content is tall */}
              <div className="p-6 sm:p-8 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 2rem)' }}>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Join Waitlist
                </h2>
              <p className="text-white/60 mb-6">Be the first to experience real vibes on Talksy</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" Ur Name "
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-300"
                    disabled={status.loading}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-300"
                    disabled={status.loading}
                  />
                </div>

                {/* Phone Input (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 ----------"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-300"
                    disabled={status.loading}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status.loading ? 'Submitting...' : 'Join Waitlist'}
                </motion.button>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg text-sm font-medium text-center ${
                      status.type === 'success'
                        ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30'
                        : 'bg-red-500/20 text-red-200 border border-red-500/30'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>

              <p className="text-xs text-white/40 mt-6 text-center">
                Your data is securely transmitted to US.
              </p>
              {/* end scrollable content */}
            </div>
            {/* end modal outer container */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

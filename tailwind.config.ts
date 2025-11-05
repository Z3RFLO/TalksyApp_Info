/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'talksy-dark': '#010004',
        'talksy-slate': '#312a3d',
        'talksy-purple': '#8b64c1',
        'talksy-lilac': '#dfd9f6',
        'talksy-blue': '#6790af'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px'
        }
      },
      animation: {
        'blob-drift': 'blobDrift 20s ease-in-out infinite alternate',
        'blob-drift-delayed': 'blobDrift 20s ease-in-out infinite alternate 3s'
      },
      keyframes: {
        blobDrift: {
          '0%': { transform: 'translate(-10%, -5%) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(8%, 6%) scale(1.12) rotate(6deg)' },
          '100%': { transform: 'translate(-10%, -5%) scale(1) rotate(0deg)' }
        }
      }
    },
  },
  plugins: [],
}

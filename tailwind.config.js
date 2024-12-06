/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a2e',
        accent: '#e94560',
        secondaryAccent: '#0f3460',
        highlight: '#f1c40f',
        primaryText: '#ffffff',
        secondaryText: '#a8a8a8',
        primaryButton: {
          DEFAULT: '#e94560',
          hover: '#ff4f70',
        },
        secondaryButton: {
          DEFAULT: '#0f3460',
          hover: '#1a4c8f',
        },
      },
      boxShadow: {
        neon: '0 0 10px #e94560, 0 0 20px #e94560',
      },
      gradientColorStops: {
        'gradient-start': '#e94560',
        'gradient-end': '#f1c40f',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
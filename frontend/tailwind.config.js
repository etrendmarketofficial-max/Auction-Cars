‎/** @type {import('tailwindcss').Config} */
‎export default {
‎  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
‎  theme: {
‎    extend: {
‎      colors: {
‎        primary: '#0a1b2b',  // Deep navy
‎        accent: '#e60012',   // Japan red
‎        silver: '#c0c7d1'
‎      },
‎      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.08)' },
‎      borderRadius: { '2xl': '1.25rem' }
‎    },
‎  },
‎  plugins: [],
‎}
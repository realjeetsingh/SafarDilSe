/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adventure-orange': '#f97316',
        'mountain-blue': '#0ea5e9',
        'nature-green': '#10b981',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        header: '0 4px 24px rgba(0, 0, 0, 0.04)',
        'header-dark': '0 4px 24px rgba(0, 0, 0, 0.15)',
        sidebar: '4px 0 24px rgba(0, 0, 0, 0.04)',
        'sidebar-dark': '4px 0 24px rgba(0, 0, 0, 0.15)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
  },
  plugins: [],
}

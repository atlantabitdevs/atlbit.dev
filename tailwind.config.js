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
      colors: {
        // Semantic tokens. Values live in globals.css and switch by theme.
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        faint: 'var(--color-faint)',
        line: 'var(--color-line)',
        brand: 'var(--color-brand)',
        'brand-strong': 'var(--color-brand-strong)',
        link: 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',
        accent: 'var(--color-accent)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        header: '0 1px 0 var(--color-line)',
        'header-dark': '0 1px 0 var(--color-line)',
        sidebar: '4px 0 24px rgba(0, 0, 0, 0.04)',
        'sidebar-dark': '4px 0 24px rgba(0, 0, 0, 0.15)',
      },
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      serif: ['var(--font-serif)', 'Georgia', 'serif'],
      mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2744',
          light: '#243460',
          dark: '#111c33',
        },
        cream: {
          DEFAULT: '#f8f5f0',
          dark: '#ede8e0',
        },
        wood: {
          DEFAULT: '#c4935a',
          light: '#d4a96e',
          dark: '#a67a45',
        },
        stone: {
          50: '#faf9f7',
          100: '#f2efe9',
          200: '#e4dfd6',
          300: '#cfc7ba',
          400: '#b5a898',
          600: '#7a6e62',
          800: '#3d3530',
          900: '#1f1a16',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      spacing: {
        section: '5rem',
        'section-lg': '7rem',
      },
      maxWidth: {
        content: '1280px',
        prose: '720px',
      },
      boxShadow: {
        card: '0 2px 20px rgba(26, 39, 68, 0.08)',
        'card-hover': '0 8px 40px rgba(26, 39, 68, 0.16)',
        wood: '0 4px 24px rgba(196, 147, 90, 0.20)',
      },
      borderRadius: {
        card: '0.75rem',
      },
    },
  },
  plugins: [],
}

export default config

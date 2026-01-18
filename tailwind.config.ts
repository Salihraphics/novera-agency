import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate-dark': '#0f172a',
        'slate-light': '#f1f5f9',
        'primary': '#7c3aed',
        'primary-dark': '#6d28d9',
        'secondary': '#ec4899',
        'accent-light': '#a78bfa',
        'accent-dark': '#c4b5fd',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        'section': '6rem',
        'section-sm': '3.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 4px 15px rgba(124, 58, 237, 0.08)',
        'md': '0 10px 30px rgba(124, 58, 237, 0.2)',
        'lg': '0 15px 40px rgba(124, 58, 237, 0.15)',
        'xl': '0 20px 40px rgba(124, 58, 237, 0.3)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
        'gradient-accent-dark': 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'base': '8px',
        'md': '12px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // warm tan
        input: 'var(--color-input)', // subtle beige
        ring: 'var(--color-ring)', // rich coffee brown
        background: 'var(--color-background)', // warm cream
        foreground: 'var(--color-foreground)', // dark espresso
        primary: {
          DEFAULT: 'var(--color-primary)', // rich coffee brown
          foreground: 'var(--color-primary-foreground)', // warm cream
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // warm tan
          foreground: 'var(--color-secondary-foreground)', // dark espresso
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // muted red
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // subtle beige
          foreground: 'var(--color-muted-foreground)', // medium brown
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // golden rod
          foreground: 'var(--color-accent-foreground)', // dark espresso
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // warm cream
          foreground: 'var(--color-popover-foreground)', // dark espresso
        },
        card: {
          DEFAULT: 'var(--color-card)', // subtle beige
          foreground: 'var(--color-card-foreground)', // dark espresso
        },
        success: {
          DEFAULT: 'var(--color-success)', // forest green
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // warm orange
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // muted red
          foreground: 'var(--color-error-foreground)', // white
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subsection': ['1.875rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'coffee-cta': '0 4px 12px rgba(139, 69, 19, 0.15)',
        'coffee-card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'coffee-hover': '0 8px 24px rgba(139, 69, 19, 0.2)',
      },
      backdropBlur: {
        'coffee': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'coffee-float': 'coffeeFloat 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        coffeeFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '110': '110',
      },
    },
  },
  plugins: [
    typography,
    animate,
  ],
}
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Bricolage Grotesque Variable',
          'Inter Variable',
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        underline: '',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [typography],
}

import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: false,
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#ffffff",
            secondary: "#EE457E",
            background: "#efedec"
          }
        },
        dark: {
          colors: {
            primary: "#9353d3",
          }
        },
      },
    })]
  ,
}

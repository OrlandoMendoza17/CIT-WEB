/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "sm": ["1.2rem", {
          lineHeight: "1.8rem",
        }],
        "base": ["1.6rem", {
          lineHeight: "1.95rem",
        }],
        "lg": ["1.8rem", {
          lineHeight: "2.4rem",
        }],
        "xl": ["2.4rem", {
          lineHeight: "3.2rem",
        }],
        "2xl": ["4rem", {
          lineHeight: "4rem",
        }],
      },
    },
  },
  plugins: [],
}

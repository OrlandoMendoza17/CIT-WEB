/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00aaff",
        secondary: "#232c3d",
      },
      fontSize: {
        "sm": ["1.2rem"],
        "base": ["1.6rem"],
        "lg": ["1.95rem"],
        "xl": ["2.4rem"],
        "2xl": ["3.2rem"],
      },
    },
  },
  plugins: [],
}

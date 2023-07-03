/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "2xs": '375px',
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#00aaff",
        secondary: {
          DEFAULT: "#232c3d",
          dark: "#1c2331",
          // 700: "#151a25",
        },
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

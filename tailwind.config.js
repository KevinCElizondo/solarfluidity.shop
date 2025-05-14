/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'secondary': '#38bdf8',
        'accent': '#0ea5e9',
      },
    },
  },
  plugins: [],
};

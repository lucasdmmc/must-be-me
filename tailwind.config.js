/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#061948',
        lightBrown: '#fdebe0',

        // text

        orange100: '#f47734',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-600': '#2563EB',
        'purple-600': '#7C3AED',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #2563EB, #7C3AED)',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}

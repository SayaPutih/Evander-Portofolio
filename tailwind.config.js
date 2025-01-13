/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF', // Warna utama (soft blue-purple)
        secondary: '#7B5CFF', // Warna kedua (darker purple-blue)
        bgcolor: '#000000', // Background dengan nuansa ungu kebiruan yang soft
        boxColor: '#111a3e', // Warna box lebih terang dengan nuansa ungu lembut
        boxSeconColor: '#a3aee3', // Border box lebih terang dengan ungu pastel
      },
      gradientColorStops: {
        purpleBlue: ['#6C63FF', '#7B5CFF'], // Gradasi dari biru ke ungu
      },
    },
  },
  plugins: [],
};

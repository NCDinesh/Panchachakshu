/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50', // Rich dark blue-gray
          light: '#34495E',   // Lighter blue-gray
          dark: '#1A252F',    // Darker blue-gray
        },
        secondary: {
          DEFAULT: '#3498DB', // Bright blue
          light: '#5DADE2',   // Light bright blue
          dark: '#2980B9',    // Dark bright blue
        },
        accent: {
          DEFAULT: '#E74C3C', // Coral red
          light: '#EC7063',   // Light coral
          dark: '#C0392B',    // Dark coral
        },
        neutral: {
          100: '#ECF0F1', // Almost white
          200: '#D5DBDB', // Very light gray
          300: '#BDC3C7', // Light gray
          400: '#95A5A6', // Medium gray
          500: '#7F8C8D', // Gray
          600: '#616A6B', // Dark gray
          700: '#424949', // Darker gray
          800: '#2C3E50', // Very dark gray
          900: '#1A252F', // Almost black
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
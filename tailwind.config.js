/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "Robot": ["Roboto"],
        // "Lato": ["Lato"],
        // "Inter": ["Inter"],
        "poppins": ["Poppins"],
        "RadioCanada": ["RadioCanada"],
        // "averia-serif-libre": ["averia-serif-libre"]
      },
      colors: {
        // Define your custom color here
        'blackk': '#1E1E28',
        'purpell': '#6268F5',
        'custom-black': '#212529',
        'blogs-bg': '#3F9AFF0F'
      },
    },
  },
  plugins: [],
}
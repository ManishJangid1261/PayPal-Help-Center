/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgcolor : '#012169',
        bglite : '#012477',
        textcolor:'#0070ba',
        linkcolor:'#116eca',
        noticbg:'#fff0a8',
        notictext:'#785503'
      },
      dropShadow: {
        '3xl' : '2px 2px 2px rgba(0, 0, 0, 0.15)',
        
      }
  },
  plugins: [],
}
}

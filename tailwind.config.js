/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        back: "#C2E3FF"
      },
      fontFamily:{
        Rag:["Rag", "serif"],
        Rag_Regular:["Rag_Regular", "serif"]

      },
    },
  },
  plugins: [],
}


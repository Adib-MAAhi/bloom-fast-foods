/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        body: {
          tosin: '#FFFFF0', 
          adib: '#FFFDD0',  
          mahi: "#F0F8FF",
          yelo: "#FF8200"
        },
      },
    },
  },
  plugins: [],
};


//FFFFF0  FF8200  FFBA00

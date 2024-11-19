/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      screens: {
        'sm': '480px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        body: {
          tosin: '#FFFFF0', 
          adib: '#FFFDD0',  
          mahi: "#F0F8FF",
          yelo: "#FF8200",
          baby: "#FEFEFA",
          Blk: "#483C32",
          whiteSmoke:"#F5F5F5",
          footer: "#3A2E28",
          footertext: "#FEFEFA", 
          footerhover: "#D2691E"
        },
      },
    },
  },
  plugins: [],
};


//FFFFF0  FF8200  FFBA00

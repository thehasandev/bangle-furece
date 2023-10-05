const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
  })
})


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        'primary':'#048198'
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'pop': ['Poppins'],
  
      },
      backgroundImage: {
        'bgOne': "url('/src/assets/bgTwo.jpg')",
        'bgThree': "url('/src/assets/bgThree.jpg')",
        'bgFour': "url('/src/assets/bgFour.jpg')",
        'bgFive': "url('/src/assets/bgSix.jpg')",
        'bgSix': "url('/src/assets/bgSeven.jpg')",
        'bgSeven': "url('/src/assets/bgEight.jpg')",
        'counter': "url('/src/assets/counter.jpg')",
        'client': "url('/src/assets/client.jpg')",
        'police': "url('/src/assets/bg3.jpg')",
        'securityBanner': "url('/src/assets/sequrityBanner.jpg')",
      },
      animation: {
        'ani': 'bg 1s linear',
      },
      scale: {
        '175': '1.1',
        '100': '1',
      
      },
      keyframes: {
        bg: {
          '0%': { letterSpacing: "30px", filter: `blur(10px)`,},
          '100%':{letterSpacing: "0px", filter: `blur(0px)`,}
        },
      },
      clipPath: {
        counterPlygon: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
        clintPlygon: "polygon(51% 0, 100% 0, 100% 0, 92% 52%, 100% 99%, 0 100%, 9% 48%, 0 0)",
    },
    },
  },
  plugins: [
    rotateX,require("tailwind-clip-path")
  ],
}

// require("tailwind-clip-path")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'foundation-bg': 'url(/src/assets/foundation.jpg)', 
        'whychoose-bg': 'url(/src/assets/whychoose.png)',
        'comms-bg': 'url(/src/assets/comms.png)'
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

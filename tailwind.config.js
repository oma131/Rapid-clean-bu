/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      customColor: '#28A745', // Add your custom color here
      customColor2: '#990404',
      customColor3: '#292f36',
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'dark': '#363636',
      'neutral': '#666666',
      'white': '#ffffff',
      'purple': '#6261FF',
      'midnight': '#0100bb',
      'light': '#ECF0F5',
      'faded': '#3938FF',
      'mixed': '#1126920D',
      'grey': '#B3B2FF66',
      'bermuda': '#78dcca',
      'green': '#86EFAC',
      'card': '#9333EA',
      'darkgreen': '#28A745',
      'darkgrey': '#646468',
   
    },
  },
  plugins: [require("@tailwindcss/forms"),  addDynamicIconSelectors(),],
}

// addDynamicIconSelectors(), this plugin is for using iconify icons in tailwind
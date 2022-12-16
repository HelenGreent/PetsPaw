/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
  letterSpacing: {
    tightest: '2px',
  },
  extend: {
    colors: {
      ...colors,
      app: '#F8F8F7',
      base: '#ffffff',
      baseOpacity: 'rgba(255, 255, 255, 0.6)',
      hover: '#FF868E',
      hovered: '#FBE0DC',
      active: '#FF868E',
      backgrounded: '#F8F8F7',
      grey: '#F8F8F7',
      lightGrey: '#8C8C8C',
      black: '#1D1D1D',
      'yellow': '#FFD280',
      'yellow-opacity': 'rgba(255, 210, 128, 0.3)',
      'light-green': '#97EAB9',
      'light-green-opacity': 'rgba(151, 234, 185, 0.3)',
      'lavender': '#B4B7FF'
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif']
    },
    fontSize: {
    '4xl': ['44px', '58px'],
  },
  },
},
plugins: [],
}

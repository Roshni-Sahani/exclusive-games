/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': 'Anton',
        'inter': 'Inter'
      },
      backgroundImage:{
'people': 'linear-gradient(306.99deg, rgba(81, 200, 239, 0.5) -13.72%, rgba(122, 245, 122, 0.5) 102.02%)',
      },
   backgroundSize:{
        'size':"100% 100%"
      }
    },
  },
  plugins: [],
}
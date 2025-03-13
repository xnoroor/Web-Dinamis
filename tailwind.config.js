/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#6b7280',
        secondary:'#334155',
        gelap:'#111827',
      },
      screens:{
        '2xl' :'1320px',
      }
    },
  },
  plugins: [],
}


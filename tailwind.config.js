/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        "Very_Dark_Magenta": "hsl(300, 43%, 22%)",
        "Soft_Pink": "hsl(333, 80%, 67%)",
        "Dark_Grayish_Magenta": "hsl(303, 10%, 53%)",
        "Light_Grayish_Magenta": "hsl(300, 24%, 96%)",
        "White" : "hsl(0,0%, 100%)"
      },
      spacing: {
        '00': '6vh',
        '03': '5vw',
        '030': '9vw',
        '031': '10vw',
        '032': '15vw',
        '033': '25vw',
        '034': '30vw',
        '035': '35vw',
        'card_width': '25vw',
        'star_width': '29vw',
        'second': '30vw',
        'star_height': '6vh',
        'card_height': '30vh',
        'people_img_height': '42px'
      },
      fontSize: {
        'main': '15px',
        'main-text': '20px',
        'lgg': 'clamp(1rem, 1.35vw, 1.5rem)'
      },
      fontFamily:{
        'main_text' : "'League Spartan', sans-serif",
      },
      backgroundImage:{
        'img_a': "url('images/image-colton.jpg')",
        'img_b': "url('images/image-irene.jpg')",
        'img_c': "url('images/image-anne.jpg')"
      },
      screens:{
        'first': '850px',
        'crictical':'1310'
      }

    },
  },
  plugins: [],
}


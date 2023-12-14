/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    

        screens: {
            'mobile': {'max': '767px'},
      
            'tablet': {'max': '1024px' , 'min': '768px'},
          },
        
        colors:{
            'primary':'aqua',
        },
        backgroundImage: {
        // 'home': "url('https://i.pinimg.com/originals/33/11/92/3311924db62ceef62a4a7ee87017280f.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

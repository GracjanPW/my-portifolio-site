import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      header:{
        text: '#171616',
        bg: '#e3e3e3'
      },
      navbar:{
        text: '#171616',
        bg: '#e3e3e3',
      },
      background:'#e3e3e3',
      footer:{
        text: '#e3e3e3',
        bg: '#171616',
      },
      card:{
        light: '#e3e3e3',
        dark: '#4F4F4F',
        border:{
          light:'#C0C0C0'
        }


      }

    },
    extend: {
     
    },
  },
  plugins: [],
}
export default config

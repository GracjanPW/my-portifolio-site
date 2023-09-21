import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
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
        },
        link:{
          active:{
            light: '#141010'
          }
          
        }
      }
    }
  },
  plugins: [
    function ({addComponents,config}:any) {
      const containerFluid = {
          '.container-fluid': {maxWidth: config('theme.screens.lg')}
      }
      addComponents(containerFluid)
  }
  ],
}
export default config

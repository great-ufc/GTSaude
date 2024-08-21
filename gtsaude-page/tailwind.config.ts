import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      backgroundImage:{
        'img_bg_hero': "url('../assets/HeroBanner.svg')",
  
      },
    extend: {
      colors: {
        'primary-blue': '#232336',
        'secondary-blue': '#363653',
        'detail-green': '#11BC76',
        'detail-orange': '#E88A2E',
        'primary-white': '#FFFFFF'
      }
    },
},
  plugins: [],
};
export default config;

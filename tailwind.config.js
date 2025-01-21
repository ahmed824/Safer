/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)", // Custom main color
        secondary: "var(--second-color)", // Custom secondary color
        shadowColor: "var(--box-shadow)", // Custom shadow color if needed
      },
      boxShadow: {
        custom: "var(--box-shadow)", // Shadow from your CSS
      },
      keyframes: {
        truckMotion: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(3px)' },
        },
        roadMove: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-350px)' },
        },
      },
      animation: {
        'truckMotion': 'truckMotion 1s linear infinite',
        'roadMove': 'roadMove 1.4s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

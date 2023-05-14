/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'smooth-decay': 'smoothDecay 3s forwards'
      },
      keyframes: {
        'smoothDecay': {
          '0%': {'opacity': 1},
          '100%': {'opacity': 0 }
        }
      }
    },
  },
  plugins: [],
}


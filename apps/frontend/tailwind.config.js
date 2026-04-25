/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#11211f',
        mint: '#c7f0da',
        leaf: '#2f7d58',
        coral: '#ff7a59',
        sand: '#f4efe6',
      },
      fontFamily: {
        sans: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(17, 33, 31, 0.16)',
      },
    },
  },
  plugins: [],
};

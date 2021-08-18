module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito', 'Poppins', 'sans-serif'],
        title: ['Tangerine', 'Poppins', 'sans-serif'],
      },
      backgroundImage: () => ({
        home: "url('/images/background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        'main-white': 'var(--main-white)',
        'main-red': 'var(--main-red)',
        'main-blue': 'var(--main-blue)',
        'main-gray': 'var(--main-gray)'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(320px, 1fr))'
      }
    }
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('children', '& > *');
    },
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`
          })
        },
        {
          values: Object.assign(
            theme('bgGradientDeg', {}),
            Object.fromEntries(
              [...Array(360)].map((_, i) => [i + 1, `${i + 1}deg`])
            )
          )
        }
      );
    }
  ]
};

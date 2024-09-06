// const plugin = require('tailwindcss/plugin');
// const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  purge: ['./src/**/*.{js,jsx}'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: '#234579'
      },
      boxShadow: {
        custom: '0px 4px 40px rgba(186, 143, 255, 0.2)'
      }
      // fontSize: {
      //   48: defaultTheme.fontSize['3xl'],
      //   '4xl': defaultTheme.fontSize['4xl']
      // }
    },
    colors: {
      primaryColor: '#0464B3',
      primaryColor2: '#034982',
      primaryColor3: 'linear-gradient(90deg, #0a2b5c 0%, #43679f 100%)',
      accentColor: '#868686',
      darkColor: '#303030',
      lightColor: '#FBFDFF0.05',
      captionColor: '#868686',
      Purple100: '#8C55E3',
      lightPurpleBg: '#FBF9FF',
      secondaryColor: '#703CC1',
      lightPurpleBgPriceCard: '#F2EAFF',
      darkPrimarySelectedBg: 'rgba(90, 41, 167, 0.08)'
    },
    screens: {
      xs: [{ min: '320px', max: '500px' }],
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
      xxl: '1556px',
      custom_md: '1380px',
      custom_sm: '1020px'
    },
    fontFamily: {
      futura: ['Futura-Bold'],
      muli: ['Muli', 'sans-serif']
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '900'
    }
  },
  plugins: [
    // require('tailwindcss-font-inter')({
    //   // default settings
    //   a: -0.0223,
    //   b: 0.185,
    //   c: -0.1745,
    //   baseFontSize: 16,
    //   importFontFace: true
    // }),
    // plugin(({ addBase, theme }) => {
    //   addBase({
    //     h1: {
    //       fontSize: '60px',
    //       fontWeight: 'bold',
    //       fontFamily: theme('fontFamily.inter')
    //     },
    //     h2: {
    //       fontSize: theme('fontSize.48'),
    //       fontWeight: 'bold',
    //       fontFamily: theme('fontFamily.inter')
    //     },
    //     h3: {
    //       fontSize: theme('fontSize.4xl'),
    //       fontWeight: 'semibold',
    //       fontFamily: theme('fontFamily.inter')
    //     },
    //     div: {
    //       fontFamily: theme('fontFamily.inter'),
    //       fontWeight: 'normal'
    //     },
    //     p: {
    //       fontFamily: theme('fontFamily.inter'),
    //       fontSize: '32px',
    //       fontWeight: 'normal'
    //     },
    //     span: {
    //       fontFamily: theme('fontFamily.inter'),
    //       fontSize: '32px',
    //       fontWeight: 'normal'
    //     }
    //   });
    // })
  ]
});

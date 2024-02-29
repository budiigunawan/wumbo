/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      primary: '#3B82F6',
      'primary-light': '#C6DBFF',
      dark: '#193766',
      muted: '#697B98',
      'muted-light': '#FFFFFF',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      maxWidth: {
        295: '73.75rem',
      },
    },
  },
  plugins: [],
};

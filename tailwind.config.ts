import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '898px',
      // xl:"1024px"
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: {
          bg: {
            primary: '#1E1E1E',
            secondary: '#2A2A2A',
          },
          accent: {
            primary: '#9d4edd',
            secondary: '#7b2cbf',
            tertiary: '#c77dff',
          },
          text: {
            primary: '#f5f5f5',
            secondary: '#b3b3b3',
          },
          syntax: {
            keyword: '#ff79c6',
            function: '#8be9fd',
            string: '#f1fa8c',
            comment: '#6272a4',
            variable: '#bd93f9',
            constant: '#ffb86c',
          },
          border: '#383838'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(150deg, #7b2cbf 1.28%, #9d4edd 90.75%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

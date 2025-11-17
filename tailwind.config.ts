import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        clrRed: '#F28A8A',
        clrRedLight: '#FDEDED',
        clrBlue: '#8EC5FC',
        clrBlueLight: '#F0F7FF',
        clrYellow: '#F9E79F',
        clrYellowLight: '#FEFCE8',
      },
    },
  },
  plugins: [],
};
export default config;

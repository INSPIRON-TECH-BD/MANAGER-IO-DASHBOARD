import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:  '#FFD700', // Gold
          success:  '#00A86B',
          accent:   '#FF8C42',
          cyan:     '#00D2FF', // Cyan
          dark:     '#010409',
          card:     '#0d1117',
          border:   '#30363d',
          muted:    '#8b949e',
          text:     '#ffffff',
        },
      },
      fontFamily: {
        sans:          ['Neo Sans Pro', 'sans-serif'],
        institutional: ['Neo Sans Pro', 'sans-serif'],
        display:       ['Neo Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

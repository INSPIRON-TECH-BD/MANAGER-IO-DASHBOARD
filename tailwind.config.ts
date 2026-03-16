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
          primary:  '#0072CE',
          success:  '#00A86B',
          accent:   '#FF8C42',
          cyan:     '#00DBB8',
          dark:     '#0f172a',
          card:     '#1e293b',
          border:   '#334155',
          muted:    '#94a3b8',
          text:     '#e2e8f0',
        },
      },
      fontFamily: {
        sans:     ['Inter', 'sans-serif'],
        display:  ['Glacial Indifference', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

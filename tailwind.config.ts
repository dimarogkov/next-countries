import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                dark: '#121212',
                darkLight: '#282828',
                blue: '#382bf0',
                light: '#e4e4e7',
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;

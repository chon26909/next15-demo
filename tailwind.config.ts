import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#fe6132',
                // secondary: 'var(--secondary-color)',
            },
            gridTemplateColumns: {
                fluid: 'repeat(auto-fit, minmax(250px, 1fr))',
            },
            backgroundImage: {
                inherit: 'inherit',
            },
        },
    },
    plugins: [],
} satisfies Config;

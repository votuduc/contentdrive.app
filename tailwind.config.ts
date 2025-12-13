import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                google: {
                    blue: '#4285F4',
                    red: '#DB4437',
                    yellow: '#F4B400',
                    green: '#0F9D58',
                },
            },
            fontFamily: {
                sans: ['Google Sans', 'sans-serif'],
                display: ['Google Sans', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 6px 0 rgba(60,64,67,0.15)',
                'hover': '0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15)',
            }
        },
    },
    plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#FF0000",
                "primary-glow": "#FF3333",
                "brand-black": "#000000",
                "dark-red": "#8B0000",
                "metallic-grey": "#333333",
                "dark-grey": "#1C1C1E",
                "danger": "#FF0000",
                "neon-green": "#00FF00",
            },
            fontFamily: {
                "display": ["var(--font-display)", "sans-serif"]
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: "1", transform: 'scale(1)' },
                    '50%': { opacity: ".9", transform: 'scale(1.02)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
};
export default config;

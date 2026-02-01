/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void-black': '#0a0a0a',
                'acid-lime': '#ccff00',
                'hyper-pink': '#ff0099',
            },
            fontFamily: {
                mono: ['monospace', 'ui-monospace', 'SFMono-Regular'],
                sans: ['sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
            },
            animation: {
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
            },
            colors: {
                brand: {
                    50: '#e7f7ff',
                    100: '#cfeeff',
                    200: '#9fdeff',
                    300: '#6ecfff',
                    400: '#3ebfff',
                    500: '#0eafff',
                    600: '#0a8ccc',
                    700: '#076999',
                    800: '#054666',
                    900: '#022333'
                }
            },
            boxShadow: {
                glow: '0 0 120px -30px rgba(62,191,255,.45)'
            }
        },
    },
    plugins: [],
}
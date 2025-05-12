/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // Asegúrate de incluir todos los tipos de archivos que uses
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1d4ed8', // Azul personalizado
                secondary: '#9333ea', // Púrpura personalizado
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

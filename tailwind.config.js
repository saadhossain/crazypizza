/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "pri": "#CFD142",
                "2nd": "#E86A38",
                "3rd": "#D6432C",
                "accent": "#212121"
            }
        },
        fontFamily: {
            'Leckerli': ['Leckerli One', 'cursive'],
            'Sofia': ['Sofia Sans', 'sans-serif']
        }
    },
    plugins: [],
}

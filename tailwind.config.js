/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        //If you're using the src/ directory
        "./src/**/*.{js,ts,jsx,tsx}",

        //If you're using the default paths:
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#7445F8",
                secondary: "#67748E",
                grey: "#f8f9fa",
                navy: "#252F40",
            },
            boxShadow: {
                '3xl': '0 0 0 10000px rgba(0,0,0,0.75)',
                button: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                default: "0px 20px 27px rgba(0, 0, 0, 0.05)",
                card_icon:
                    "0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};

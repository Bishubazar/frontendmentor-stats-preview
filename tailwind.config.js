/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    vdark: "hsl(233, 47%, 7%)",
                    darkd: "hsl(233, 47%, 7%)",
                },
                violet: {
                    soft: "hsl(277, 64%, 61%)",
                    dark: "#1c1938",
                },
                white: {
                    DEFAULT: "white",
                    p: "hsla(0, 0%, 100%, 0.75)",
                    heading: "hsla(0, 0%, 100%, 0.6)",
                },
            },
        },
    },
    plugins: [],
};

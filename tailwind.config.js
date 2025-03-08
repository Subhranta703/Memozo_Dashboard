/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A", // Dark Blue
          secondary: "#3B82F6", // Light Blue
          textColor: "#FFFFFF", // White
        },
      },
    },
    plugins: [],
  };
  
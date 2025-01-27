/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "36px",
        "4xl": "48px",
        "5xl": "64px",
      },
      colors: {
        green: {
          light: "#8dc63f",
          dark: "#5f9317",
        },
        orange: {
          light: "#e75b1e",
          dark: "#f04900",
        },
        blue: {
          light: "#66afff",
          dark: "#1E69B8",
          dark1: "#1e69b880",
        },
        yellow: {
          light: "#ffdb4c",
          dark: "#fdcb03",
          dark1: "#fdcb0380",
        },
      },
    },
  },
  plugins: [],
};

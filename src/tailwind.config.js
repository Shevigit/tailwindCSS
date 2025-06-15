module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A8754",
        secondary: "#F8B400",
        accent: "#FF6363",
        background: "#F9FAFB",
        textMain: "#1F2937",
      },
      fontFamily: {
        sans: ["'Segoe UI'", "sans-serif"],
        heading: ["'Rubik'", "sans-serif"],
      },
      spacing: {
        container: "1.5rem",
      },
    },
  },
  plugins: [],
};

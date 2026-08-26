import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B3A5C",
          light: "#2A5580",
          dark: "#0F2640",
        },
        accent: {
          DEFAULT: "#C8A951",
          light: "#D4BC72",
          dark: "#B08D2A",
        },
        warm: {
          DEFAULT: "#F5F0E8",
          dark: "#E8DFD0",
        },
        "text-dark": "#1A1A2E",
        "text-muted": "#5A5A7A",
        success: "#2D8B4E",
        nursery: "#E8A87C",
        "primary-school": "#85CDCA",
        secondary: "#D5A4A4",
      },
      fontFamily: {
        heading: ["Georgia", "Times New Roman", "serif"],
        body: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

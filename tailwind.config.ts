import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00acd3",
        white: "#fff",
        black: "#000000",
        gray: "#07339b",
      },
      fontSize: {
        titleSize: "3rem",
        size14: "14px",
        size16: "16px",
        size18: "18px",
        size20: "20px",
        size22: "22px",
        size24: "24px",
        size40: "40px",
      },
    },
  },
  darkMode: "class",

  plugins: [heroui()],
};
export default config;

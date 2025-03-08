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
      animation: {
        rotate3d: "rotate3dAnimation 5s linear infinite",
      },
      keyframes: {
        rotate3dAnimation: {
          "0%": { transform: "scale(1) rotateZ(0deg) skew(0deg, 0deg)" },
          "30%": { transform: "scale(1.1) rotateZ(120deg) skew(5deg, 2deg)" },
          "50%": { transform: "scale(1.2) rotateZ(180deg) skew(10deg, 5deg)" },
          "70%": { transform: "scale(1.1) rotateZ(240deg) skew(5deg, 2deg)" },
          "100%": { transform: "scale(1) rotateZ(360deg) skew(0deg, 0deg)" },
        },
      },
    },
  },
  darkMode: "class",

  plugins: [heroui()],
};
export default config;

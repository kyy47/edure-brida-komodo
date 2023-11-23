import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cranberry: {
          50: "#fcf3f6",
          100: "#f9eaf0",
          200: "#f6d4e0",
          300: "#efb2c6",
          400: "#e482a0",
          500: "#d85d80",
          600: "#c53d5d",
          700: "#aa2c46",
          800: "#8d273b",
          900: "#762535",
          950: "#47101a",
        },
        secondary: "#5C5C5C",
      },

      screens: {
        xs: "360px",
        // => @media (min-width: 360px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        xmd: "834px",
        // => @media (min-width: 834px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      fontSize: {
        "6xl": "3.5rem",
      },
      spacing: {
        "6.25": "6.25rem",
        "10%": "10vh",
        "15%": "15vh",
        "20%": "20vh",
      },
      height: {
        "10%": "10vh",
        "hero-fixed": "213px",
      },
    },
  },
  plugins: [],
};
export default config;

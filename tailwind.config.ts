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
        'hpi-white': "#FFFFFF",
        'hpi-blue-dark': "#002E6D",
        'hpi-dark-gradient':"#000102",
        'hpi-blue-light':"#009BDE",
        'hpi-grey-dark':"#707070",
        'hpi-grey-light':"#C9C9C9",
        'hpi-blue-sea':"#10205F",
        'hpi-celeste':"#9ACAEB17"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

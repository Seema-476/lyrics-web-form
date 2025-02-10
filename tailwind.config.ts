import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "levender": "#fafaff",
        "z-black": "#2E2F37",
        "dusk-black": "#14191C",
        "gray": "#656566",
        "dark-gray": "#475467",
        "silver-gray": "#D0D5DD",
        "blue": "#007BFF",
      },
      lineHeight: {
        "custom-xl": "30px",
        "custom-2xl": "58.45px",
      },
      boxShadow: {
        "custom-xl": "0px 1px 2px 0px #1018280D",
      },
      fontFamily: {
        "inter": "'inter',sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;

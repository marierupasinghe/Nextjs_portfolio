/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
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
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      // Update these color mappings according to the latest Tailwind CSS
      sky: colors.sky, // previously lightBlue
      stone: colors.stone, // previously warmGray
      neutral: colors.neutral, // previously trueGray
      gray: colors.gray, // previously coolGray
      slate: colors.slate, // previously blueGray
      // Keep your custom colors if needed
    },
  },
  plugins: [],
};

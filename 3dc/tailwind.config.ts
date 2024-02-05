import type { Config } from "tailwindcss";
//import withMT from "@material-tailwind/react/utils/withMT";

// module.exports = withMT({
//   content: ["./pages/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,tsx,ts}"
  ],
  theme: {
    extend: {
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



// /** @type {import('tailwindcss').Config} */

// const withMT = require('@material-tailwind/react/utils/withMT');

// module.exports = withMT({
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//     './theme.config.tsx',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('@tailwindcss/forms'),
//            require('tailwindcss-animated')],
//   darkMode: 'class',
// });

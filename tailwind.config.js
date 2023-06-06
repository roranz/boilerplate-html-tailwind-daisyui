/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html, js, jsx, tsx, ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};

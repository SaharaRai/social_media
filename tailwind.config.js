// module.exports = {
//   future: {
//     removeDeprecatedGapUtilities: true,
//   },
// };

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#005c98",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
    extend: {},
  },
  plugins: [],
};

// ---Add to tailwind config---
//bg-blue-medium
// text-red-primary
// text-blue-medium
//text-gray-base
//border-gray-primary

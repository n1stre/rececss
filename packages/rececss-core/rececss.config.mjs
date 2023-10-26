export default {
  output: {
    path: "./src/styles",
    filename: "rececss",
    extension: "css",
    // splitByMedia: true,
    // purge: { content: ["./website/pages/**/*.js"] },
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 992px)",
    xl: "only screen and (min-width: 1200px)",
  },
  sep: {
    media: ":",
    variant: ":",
  },
  values: {},
};

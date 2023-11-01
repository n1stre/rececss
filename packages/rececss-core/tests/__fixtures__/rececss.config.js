module.exports = {
  output: {
    path: "./website/styles",
    filename: "rececss",
    extension: "css",
    splitByMedia: false,
    purge: { content: ["./website/pages/**/*.js"] },
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)",
  },
  separator: {
    media: ":",
    variant: ":",
  },
  values: {},
  definitions: [
    {
      classname: "width-20px",
      declarations: "width: 20px;",
    },
  ],
};

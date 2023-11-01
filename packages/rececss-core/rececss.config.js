/** @type {import('./dist').IConfig.DTO} */
module.exports = {
  output: {
    path: "./tmp/styles",
    filename: "rececss",
    extension: "css",
    splitByMedia: true,
    // purge: { content: ["./website/pages/**/*.js"] },
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 992px)",
    xl: "only screen and (min-width: 1200px)",
  },
  separator: {
    media: ":",
    variant: ":",
  },
  values: ({ defaults }) => {
    return {
      width: { ...defaults.width },
      ...defaults,
    };
  },
};

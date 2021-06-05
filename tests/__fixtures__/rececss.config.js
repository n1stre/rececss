
module.exports = {
  output: {
    path: "./website/styles",
    filename: "rececss",
    extension: "css",
    splitByMedia: false,
    purge: { content: ['./website/pages/**/*.js',] }
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)"
  },
  sep: {
    media: ":",
    variant: ":"
  },
  rules: {
  },
}

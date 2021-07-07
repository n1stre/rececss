module.exports = {
  basePath: "/rececss",
  assetPrefix: "/rececss/",

  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/introduction",
        permanent: true,
      },
    ];
  },
};

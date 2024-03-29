module.exports = {
  basePath: "/rececss",
  assetPrefix: "/rececss/",

  experimental: {
    externalDir: true,
    esmExternals: true,
  },

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

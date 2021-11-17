module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Joe Leggett",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Montserrat:400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
            "Syne:400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
            "Libre Baskerville:400,500,600,700,800,900,400i,500i,600i,700i,800i,900i",
            "Quicksand",
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

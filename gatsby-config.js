module.exports = {
  siteMetadata: {
      title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          quality: 95,
        },
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        stripMetadata: true
      },
    },
  ]
};
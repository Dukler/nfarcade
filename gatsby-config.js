module.exports = {
  siteMetadata: {
    title: `NFArcade`,
    siteUrl: `https://www.nonfunginblearcade.com`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-plugin-web-font-loader", {
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
          quality: 85,
          
        },
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        stripMetadata: true,
        useMozJpeg: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ['Teko', 'Roboto']
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Non Fungible Arcade',
        short_name: 'NFArcade',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/nfa-icon.png',
      },
    }
  ]
};
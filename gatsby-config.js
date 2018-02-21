module.exports = {
  siteMetadata: {
    title: `Arsenal player listing`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  {
    resolve: 'gatsby-source-wordpress',
    options: {
      baseUrl: 'eddyd88.wordpress.com',
      protocol: 'https',
      hostingWPCOM: true,
      useACF: false,
      auth: {
        wpcom_app_clientSecret: 'oeDX6oguHEbXG2xxYn4d08BmoZoeNYXyPVdsABW5M1ISgWsNKditHtIaNUMaed2L',
        wpcom_app_clientId: '57212',
        wpcom_user: 'epgday',
        wpcom_pass: 'L$racroft88',
      },
      verboseOutput: false,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `image`,
      path: `${__dirname}/src/images/`,
    },
  },
]
}
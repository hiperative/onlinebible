// loads configuration
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Biblia Online',
  },
  plugins: [
    `gatsby-plugin-lodash`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Crimson Text`]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src/sass'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/app-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

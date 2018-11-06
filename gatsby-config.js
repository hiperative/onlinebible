// loads configuration
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Biblia Online',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-apiserver',
    //   options: {
    //     // Type prefix of entities from server
    //     typePrefix: 'internal__',
    //     // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
    //     // using this name. i.e. posts.json
    //     name: `Bibles`,

    //     // The url, this should be the endpoint you are attempting to pull data from
    //     url: `https://raw.githubusercontent.com/thiagobodruk/bible/master/json/pt_acf.json`,

    //     method: 'get',

    //     headers: {
    //       'Content-Type': 'application/json',
    //       'api-key': '81f316c5f31960d155555818b8d0a59c'
    //     },

    //     // Nested level of entities in repsonse object, example: `data.posts`
    //     // entityLevel: `data`,

    //     // Simple authentication, if optional, set it null
    //     auth: null,

    //     // Optional payload key name if your api returns your payload in a different key
    //     // Default will use the full response from the http request of the url
    //     // payloadKey: `body`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
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
    // 'gatsby-source-filesystem',
    // 'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}

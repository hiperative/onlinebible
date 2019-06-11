require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'La Biblia Online',
    description:
      'Lea y busque la Biblia Sagrada de estudio con audio en diversas traducciones y lenguas. Versículos y mensajes bíblicos de la palabra de Dios para cada ocasión. Aplicación completa de estudio de las escrituras sagradas en español.',
    keywords:
      'La Biblia Sagrada, Biblia Online, Biblia cristiana, clc biblias, biblias de estudio, lea la biblia',
    author: '@rafaelllycan',
    siteUrl: 'https://www.bibliaonline.es',
    url: 'https://www.bibliaonline.es',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'PT Serif'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Montserrat',
          },
          {
            family: 'PT Serif',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'La Biblia Online',
        short_name: 'Biblia Online',
        start_url: '/?source=pwa',
        background_color: '#fffafa',
        theme_color: '#50e3c2',
        display: 'standalone',
        icon: 'src/assets/svg/novo-logo.svg', // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
};

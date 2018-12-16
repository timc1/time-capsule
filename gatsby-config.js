module.exports = {
  siteMetadata: {
    title: 'New Year Time Capsule -- Send Your Future Self A Letter',
    description: `Write your future self a letter talking about your goals and how you plan on accomplishing them in the upcoming year. 365 days later you'll receive your letter in your email. Reflect, and hopefully you'll be a few steps closer to where you want to be!`,
    url: `https://timecapsule.io`,
    image: `https://timecapsule.io/images/timecapsule_1200x630.png`,
    themeColor: `#0b1cfd`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/shared/layout`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

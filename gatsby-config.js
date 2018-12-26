module.exports = {
  siteMetadata: {
    title: 'This Next Year — Send Your Future Self A Letter',
    description: `Write your future self a letter talking about your goals and how you plan on accomplishing them in the upcoming year. 365 days later you'll receive your letter in your email. Reflect, and hopefully you'll be a few steps closer to where you want to be!`,
    url: `https://thisnextyear.com`,
    image: `https://thisnextyear.com/images/thisnextyear_1200x630.jpg`,
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
        name: 'This Next Year',
        short_name: 'ThisNextYear',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0b1cfd',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/shared/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128015210-4',
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

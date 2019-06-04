/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Google fonts`
    },

    plugins: [
        `gatsby-plugin-react-helmet`,

        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Open Sans`,`Caveat`, 'Indie Flower',
                    `source sans pro\:300,400,700` // you can also specify font weights and styles
                ]
            },


        }
    ],
}

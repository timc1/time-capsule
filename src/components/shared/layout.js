import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import Transition from './transition'

import Header from './header'
import './layout.css'

import styled from '@emotion/styled'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            url
            image
            themeColor
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'title', content: data.site.siteMetadata.title },
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content:
                'New Years Resolutions, Web Apps, Side Projects, HTML, CSS, Javascript, React, User Interface, User Experience',
            },
            {
              property: 'og:site_name',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:url',
              content: data.site.siteMetadata.url,
            },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
            {
              property: 'og:image',
              content: data.site.siteMetadata.imageUrl,
            },
            {
              name: 'twitter:domain',
              content: data.site.siteMetadata.url,
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:url',
              content: data.site.siteMetadata.url,
            },
            {
              name: 'twitter:title',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'twitter:description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'twitter:image',
              content: data.site.siteMetadata.imageUrl,
            },
            {
              name: 'theme-color',
              content: data.site.siteMetadata.themeColor,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Location>
          {({ location }) => (
            <Main>
              <Transition location={location} transitionKey={location.pathname}>
                {children}
              </Transition>
            </Main>
          )}
        </Location>
      </>
    )}
  />
)

const Main = styled.main`
  margin: auto;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

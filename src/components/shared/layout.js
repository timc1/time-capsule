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
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
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

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { PageProps, useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

import { useColorMode } from "theme-ui"
import { Box } from "rebass"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [colorMode, setColorMode] = useColorMode()

  return (
    <>
      <Box
        style={{
          margin: `0 auto`,
          //maxWidth: ,
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          setColorMode={setColorMode}
          colorMode={colorMode}
        />
        <Box>{children}</Box>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

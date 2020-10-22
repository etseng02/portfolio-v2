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
import { Box, Link, Text } from "rebass"

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
          backgroundPosition: "0 0, 50px 50px",
          backgroundSize: "100px 100px",
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          setColorMode={setColorMode}
          colorMode={colorMode}
        />
        <Box minHeight="80vh">{children}</Box>

        <Box my={4}>
          <Text textAlign="center">
            © {new Date().getFullYear()} Eddie Tseng |{" "}
            <Link href="https://github.com/etseng02/portfolio-v2">Github</Link>
          </Text>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

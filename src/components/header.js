//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Text, Box, Link } from "rebass"
import styled from "styled-components"

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Header = ({ setColorMode, colorMode }) => {
  const nextColorMode = colorMode === "blinding" ? "dark" : "blinding"

  return (
    <Box
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <Flex maxWidth={960} p="1.45rem 1.0875rem">
        <Link ml="auto" mr={0} variant="nav" href="/">
          Home
        </Link>
        <Link variant="nav" href="/">
          About Me
        </Link>
        <Link variant="nav" onClick={() => setColorMode(nextColorMode)}>
          {capitalize(colorMode)} Mode
        </Link>
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

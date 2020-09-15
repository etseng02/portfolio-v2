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
    <Box mb="1.45rem">
      <Flex maxWidth={960} p="1.45rem 1.0875rem">
        <Link fontSize={2} variant="nav" href="/">
          Home
        </Link>
        <Link ml="auto" mr={0} fontSize={2} variant="nav" href="/">
          About Me
        </Link>
        <Link fontSize={2} variant="nav" href="/">
          Blog
        </Link>
        <Link fontSize={2} variant="nav" href="/">
          Tips and Tricks
        </Link>
        <Link
          fontSize={2}
          ml={1}
          variant="themeSelector"
          onClick={() => setColorMode(nextColorMode)}
        >
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

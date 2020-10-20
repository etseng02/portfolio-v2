//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Box, Link } from "rebass"

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Header = ({ setColorMode, colorMode }) => {
  const nextColorMode = colorMode === "light" ? "dark" : "light"

  return (
    <Box py="1.45rem" px={[4, 4, 5]}>
      <Flex>
        <Link variant="nav" href="/">
          Home
        </Link>
        <Box mr={0} ml="auto">
          <Flex>
            <Link ml="auto" variant="nav" href="/about">
              About Me
            </Link>
            <Link ml="auto" variant="nav" href="/blog">
              Blog
            </Link>
            <Link
              fontSize={2}
              variant="navThemeSelector"
              onClick={() => setColorMode(nextColorMode)}
            >
              {capitalize(colorMode)}
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  setColorMode: PropTypes.func,
  colorMode: PropTypes.string,
}

export default Header

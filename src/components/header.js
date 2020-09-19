//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Box, Link } from "rebass"

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Header = ({ setColorMode, colorMode }) => {
  const nextColorMode = colorMode === "blinding" ? "dark" : "blinding"

  return (
    <Box py="1.45rem" px={[3, 4, 5]}>
      <Flex>
        <Link variant="nav" href="/">
          Home
        </Link>
        <Box mr={0} ml="auto">
          <Flex>
            <Link ml="auto" variant="nav" href="/">
              About Me
            </Link>
            <Link ml="auto" variant="nav" href="/">
              Blog
            </Link>
            <Link variant="nav" href="/">
              Writing
            </Link>
            <Link
              fontSize={2}
              ml={1}
              variant="themeSelector"
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

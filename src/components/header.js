//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Text, Box, Link } from "rebass"

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Header = ({ setColorMode, colorMode }) => {
  const nextColorMode = colorMode === "blinding" ? "dark" : "blinding"

  return (
    <Box py="1.45rem" px={[2, 4, 5]}>
      <Flex>
        <Link fontSize={2} variant="nav" href="/">
          Home
        </Link>
        <Link ml="auto" mr={0} fontSize={2} variant="nav" href="/reading">
          Reading
        </Link>
        <Link fontSize={2} variant="nav" href="/">
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
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

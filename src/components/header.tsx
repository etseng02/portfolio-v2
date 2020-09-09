import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Text, Box } from "rebass"

const Header: React.FC = () => (
  <Box
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <Box
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Text style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          home
        </Link>
      </Text>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

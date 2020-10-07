import React from "react"
import { Box } from "rebass"
import { string } from "prop-types"

const Badge = ({ text }) => (
  <Box
    sx={{
      display: "inline-block",
      color: "white",
      bg: "primary",
      px: 2,
      py: 1,
      borderRadius: 9999,
    }}
  >
    {text}
  </Box>
)

Badge.propTypes = {
  text: string,
}

export default Badge

import React from "react"
import { Box } from "rebass"
import { any } from "prop-types"

const ContentBody = props => (
  <Box maxWidth="800px" px="32px" mx="auto" mt={3} fontSize={3} {...props}>
    {props.children}
  </Box>
)

ContentBody.propTypes = {
  children: any,
  props: any,
}

export default ContentBody

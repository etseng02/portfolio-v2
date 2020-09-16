import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Card, Heading, Flex } from "rebass"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Card backgroundColor="muted" py={[5, 6, 6]} mb={[3, 4, 4]}>
      <Flex flexDirection="column" maxWidth="72rem" mx="auto">
        <Box px="32px">
          <Heading color="text" fontSize={[5, 6, 6]}>
            Eddie Tseng
          </Heading>
          <Heading fontSize={[3, 4, 4]}>
            Trying to make the web: fast, readable, and easy to navigate.
          </Heading>
        </Box>
      </Flex>
      <Flex flexDirection="row"></Flex>
    </Card>
    <Projects />
  </Layout>
)

export default IndexPage

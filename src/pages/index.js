import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Card, Heading, Flex } from "rebass"
import ProjectList from "../components/ProjectList"
import { GithubIcon, LinkedinIcon } from "../components/Icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Card backgroundColor="muted" py={[5, 5, 6]} mb={[3, 4, 4]}>
      <Flex flexDirection="column" maxWidth="72rem" mx="auto">
        <Box px="32px">
          <Heading color="text" fontSize={[4, 5, 6]}>
            Eddie Tseng
          </Heading>
          <Heading fontSize={[2, 3, 4]} mb={2}>
            Trying to make the web: fast, readable, and easy to navigate.
          </Heading>
          <LinkedinIcon />
          <GithubIcon />
        </Box>
      </Flex>
      <Flex flexDirection="row"></Flex>
    </Card>
    <ProjectList />
  </Layout>
)

export default IndexPage

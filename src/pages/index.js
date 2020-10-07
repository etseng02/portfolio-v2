import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Card, Heading, Flex } from "rebass"
import ProjectList from "../components/ProjectList"
import { GithubIcon, LinkedinIcon } from "../components/Icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Box height="100vh">
      <Card backgroundColor="muted" py={[5, 5, 6]} mb={[3, 4, 4]}>
        <Flex flexDirection="column" maxWidth="50rem" mx="auto">
          <Box px="32px">
            <Heading color="text" fontSize={[4, 5, 6]} fontFamily="body">
              Eddie Tseng
            </Heading>
            <Heading fontSize={[2, 3, 4]} mb={2}>
              Full Stack Developer, specializing in design and data
              visualization.
            </Heading>
            <LinkedinIcon />
            <GithubIcon />
          </Box>
        </Flex>
        <Flex flexDirection="row"></Flex>
      </Card>
    </Box>
    <ProjectList />
  </Layout>
)

export default IndexPage

import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Heading, Flex, Text } from "rebass"
import ProjectList from "../components/ProjectList"
import { GithubIcon, LinkedinIcon } from "../components/Icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Box height="95vh">
      <Box backgroundColor="muted" py={[5, 5, 6]} mb={[3, 4, 4]}>
        <Flex flexDirection="column" maxWidth="50rem" mx="auto">
          <Box
            px="32px"
            sx={{
              borderLeft: "solid",
              borderWidth: ["4px", "6px", "6px"],
              borderColor: "primary",
            }}
          >
            <Heading fontSize={[4, 5, 6]} color="secondary">
              Eddie Tseng
            </Heading>
            <Text fontSize={[2, 3, 4]} mb={2} color="secondary">
              Front End Developer, creating and designing content for human
              consumption.
            </Text>
            <LinkedinIcon />
            <GithubIcon />
          </Box>
        </Flex>
        <Flex flexDirection="row"></Flex>
      </Box>
    </Box>
    <ProjectList />
  </Layout>
)

export default IndexPage

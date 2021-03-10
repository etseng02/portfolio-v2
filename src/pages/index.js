import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Heading, Flex, Text } from "rebass"
// import ProjectList from "../components/ProjectList"
import { GithubIcon, LinkedinIcon } from "../components/Icons"

const IndexPage = () => (
  <Layout>
    <SEO />

    {/* <Box height="100%">
      <Flex>
        <Box mx="auto" my="auto">
          <Text>Eddie Tseng</Text>
        </Box>
      </Flex>
    </Box> */}

    <Box mx="auto" my="auto" textAlign="center">
      <Text fontSize={7}>Eddie Tseng</Text>
      <Flex>
        <Text color="#9BE2E2">&lt;</Text>
        <Text color="#fac863">Front end Developer</Text>
        <Text color="#9BE2E2"> /&gt;</Text>
      </Flex>
    </Box>

    {/* <Box height={["auto", "95vh", "95vh"]}> */}
    {/* <Box backgroundColor="muted" py={[5, 5, 6]} mb={[4, 4, 4]}>
      <Flex
        flexDirection="column"
        maxWidth="50rem"
        mx="auto"
        alignItems="center"
      >
        <Box
          ml={[4, 4, 0]}
          px={[3, 4, 4]}
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
            Front End Developer, creating and designing content for humans.
          </Text>
          <LinkedinIcon />
          <GithubIcon />
        </Box>
      </Flex>
    </Box> */}
    {/* </Box> */}
  </Layout>
)

export default IndexPage

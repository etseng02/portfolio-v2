import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Heading, Flex, Text } from "rebass"
import ProjectList from "../components/ProjectList"
import { GithubIcon, LinkedinIcon } from "../components/Icons"
import { Link } from "react-scroll"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Box height={["auto", "95vh", "95vh"]}>
      <Box backgroundColor="muted" py={[5, 5, 6]} mb={[4, 4, 4]}>
        <Flex flexDirection="column" maxWidth="50rem" mx="auto">
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
              Front End Developer, creating and designing content for human
              consumption.
            </Text>

            <LinkedinIcon />
            <GithubIcon />
          </Box>
        </Flex>
        <Flex>
          <Box mx="auto" display={["none", "flex", "flex"]}>
            <Link
              className="projectList"
              to="projectList"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box
                sx={{
                  border: "solid 1px",
                  padding: 3,
                  color: "secondary",
                  cursor: "pointer",
                }}
              >
                View my work
              </Box>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
    <ProjectList />
  </Layout>
)

export default IndexPage

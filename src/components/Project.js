import { string, array } from "prop-types"
import React from "react"
import { Button, Box, Card, Flex, Heading, Image, Text, Link } from "rebass"
import { GithubIcon } from "./Icons"

const Project = ({ title, description, image, websiteUrl, githubUrl }) => {
  return (
    <Box mb={[4, 5, 6]} mx={["auto", 0, 0]}>
      <Flex
        flexDirection={["column", "row", "row"]}
        mx={["auto", 0, 0]}
        alignItems={["center", "none", "none"]}
        justifyContent={["center", "none", "none"]}
        width={["400px", 1, 1]}
      >
        <Card
          variant="projectCard"
          mr={[0, 4, 4]}
          //mx={[0, "auto", "auto"]}
          width={["450px", "500px", "500px"]}
        >
          <Image
            src={image}
            sx={{
              width: "auto",
              height: "auto",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              objectFit: "cover",
            }}
          />
          <Box display={["block", "none", "none"]}>
            <Box>
              <Heading>{title}</Heading>
              <Text>{description}</Text>
            </Box>
          </Box>
        </Card>
        <Box
          ml={[2, 4, 4]}
          width={[1, 1 / 3, 1 / 3]}
          display={["none", "flex", "flex"]}
        >
          <Flex flexDirection="column">
            <Box>
              <Heading>{title}</Heading>
              <Text mb={2}>{description}</Text>
              <Flex flexDirection="column">
                {githubUrl && <GithubIcon url={githubUrl} color="text" />}
                {websiteUrl && (
                  <Link href={websiteUrl}>
                    <Button>Visit Website</Button>
                  </Link>
                )}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

Project.propTypes = {
  title: string,
  description: string,
  image: string,
  websiteUrl: string,
  githubUrl: string,
}

export default Project

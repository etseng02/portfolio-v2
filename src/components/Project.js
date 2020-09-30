import { string } from "prop-types"
import React from "react"
import { Button, Box, Card, Flex, Heading, Image, Text, Link } from "rebass"

const Project = ({ title, description, image, websiteUrl }) => {
  return (
    <Box mb={4}>
      <Flex
        flexDirection={["column", "row", "row"]}
        mx={["auto", 0, 0]}
        alignItems={["center", "none", "none"]}
        justifyContent={["center", "none", "none"]}
        width={["85%", 1, 1]}
      >
        <Card
          variant="projectCard"
          width={["auto", "auto", "auto"]}
          mr={[0, 4, 4]}
        >
          <Image
            src={image}
            sx={{
              maxWidth: 450,
              maxHeight: 550,
            }}
          />
          <Box display={["block", "none", "none"]}>
            <Flex flexDirection="column">
              <Box>
                <Heading>{title}</Heading>
                <Text>{description}</Text>
              </Box>
            </Flex>
          </Box>
        </Card>
        <Box
          ml={[0, "auto", "auto"]}
          width={[1, 1 / 3, 1 / 3]}
          mx={["auto", "auto", "auto"]}
          display={["none", "flex", "flex"]}
        >
          <Flex flexDirection="column">
            <Box>
              <Heading>{title}</Heading>
              <Text mb={2}>{description}</Text>
              {websiteUrl && (
                <Link href={websiteUrl}>
                  <Button>Visit Website</Button>
                </Link>
              )}
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
}

export default Project

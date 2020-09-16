import React from "react"
import { Box, Card, Flex, Heading, Image, Text } from "rebass"

const Projects = () => {
  return (
    <>
      <Box maxWidth="72rem" px="32px" margin="auto">
        <Heading mb={[4, 4, 4]} fontSize={[4, 5, 5]}>
          Projects
        </Heading>
        <Flex flexDirection={["column", "row", "row"]}>
          <Card variant="projectCard" width={[3 / 4, 1 / 4, 1 / 4]} mx="auto">
            <Image src="https://source.unsplash.com/random/512x384?space" />
            <Text>Image Card</Text>
          </Card>
          <Card variant="projectCard" width={[3 / 4, 1 / 4, 1 / 4]} mx="auto">
            <Image src="https://source.unsplash.com/random/512x384?space" />
            <Text>Image Card</Text>
          </Card>
          <Card variant="projectCard" width={[3 / 4, 1 / 4, 1 / 4]} mx="auto">
            <Image src="https://source.unsplash.com/random/512x384?space" />
            <Text>Image Card</Text>
          </Card>
        </Flex>
      </Box>
    </>
  )
}

export default Projects

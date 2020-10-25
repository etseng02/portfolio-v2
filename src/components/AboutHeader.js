import React from "react"
import { Box, Heading, Flex, Image } from "rebass"
import avatar from "../images/eddie.png"

const AboutHeader = () => {
  return (
    <Box backgroundColor="muted" py={[4, 4, 5]} mb={[3, 4, 4]}>
      <Flex alignItems="center" maxWidth="800px" mx="auto">
        <Flex flexDirection="column">
          <Box px="32px">
            <Heading
              color="secondary"
              fontSize={[4, 4, 5]}
              variant="underline"
              mb={1}
            >
              Hello.
            </Heading>
            <Heading color="secondary" fontSize={[2, 3, 4]} mb={2}>
              My name is Eddie Tseng.
            </Heading>
            <Heading color="secondary" fontSize={[2, 3, 4]} mb={2}>
              You visited my about page.
            </Heading>
            <Heading color="secondary" fontSize={[2, 3, 4]} mb={2}>
              Prepare to read.
            </Heading>
          </Box>
        </Flex>
        <Box mx={[0, "auto", "auto"]}>
          <Image
            src={avatar}
            sx={{
              width: [100, 150, 150],
              height: [100, 150, 150],
              borderRadius: 9999,
            }}
          />
        </Box>
      </Flex>
      <Flex flexDirection="row"></Flex>
    </Box>
  )
}

export default AboutHeader

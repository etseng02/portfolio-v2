import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Card, Heading, Flex, Text, Image } from "rebass"
import avatar from "../../public/static/eddie.png"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />

    <Card backgroundColor="muted" py={[4, 4, 5]} mb={[3, 4, 4]}>
      <Flex alignItems="center" maxWidth="800px" mx="auto">
        <Flex flexDirection="column">
          <Box px="32px">
            <Heading color="text" fontSize={[4, 4, 5]}>
              Hello.
            </Heading>
            <Heading fontSize={[3, 3, 4]} mb={2}>
              My name is Eddie Tseng.
            </Heading>
            <Heading fontSize={[3, 3, 4]} mb={2}>
              You visited my about page.
            </Heading>
            <Heading fontSize={[3, 3, 4]} mb={2}>
              Prepare to read.
            </Heading>
          </Box>
        </Flex>
        <Box mx={[0, "auto", "auto"]}>
          <Image
            src={avatar}
            sx={{
              width: 150,
              height: 150,
              borderRadius: 9999,
            }}
          />
        </Box>
      </Flex>
      <Flex flexDirection="row"></Flex>
    </Card>
    <Box maxWidth="800px" px="32px" mx="auto" mt={3}>
      <Text fontSize={[3, 3, 3]} mb={3}>
        I am a Toronto based full stack developer. I love solving interesting
        problems. Please do not hesitate to reach out if you think I can fit
        your needs!
      </Text>
      <Text fontSize={[3, 3, 3]} mb={3}>
        As a graduate from Ryerson University’s entrepreneurship and strategy
        program, I’ve always known that creating value, solving problems and
        self improvement were things that I’ve always loved doing. Becoming a
        developer was a natural extension of those traits. Creating complex
        applications, leading teams, and moving projects forward is what I do
        best. I’m constantly looking to improve my skills, my thought
        technology, and my life.
      </Text>
      <Text fontSize={[3, 3, 3]} mb={3}>
        For me, pushing myself both mentally and physically is incredibly
        rewarding. It’s fun to try my best, so when I decide to do something, I
        intend to achieve the highest level I can. I’ve pursued a few hobbies
        that have allowed me to push myself to the limits such as competitive
        badminton and competitive dragon boat. Currently, I’m trying to become
        the best that I can be at bouldering (rock climbing without ropes). I’ll
        never be satisfied with who I am. I hear a voice in my head telling me I
        can do more and I can be better. But for now, this who I currently am.
      </Text>
    </Box>
  </Layout>
)

export default AboutPage

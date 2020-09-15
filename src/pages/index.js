import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Card, Heading, Text, Flex } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Card
      mt={[2, 1, 1]}
      backgroundColor="muted"
      py={6}
      mx={"-30vw"}
      pl={"32vw"}
      pr={"15vw"}
      width="135vw"
    >
      <Heading textDecoration="underline" color="text" fontSize={[5, 6, 6]}>
        Eddie Tseng
      </Heading>
      <Flex flexDirection="row">
        <Heading fontSize={[3, 4, 4]}>
          Trying to make the web: fast, readable, and easy to navigate.
        </Heading>
        {/* <Heading fontSize={[3, 4, 5]} color="teal">
        &lt;
      </Heading>
      <Heading fontSize={[3, 4, 5]} color="yellow">
        WebDeveloper
      </Heading>
      <Heading fontSize={[3, 4, 5]} color="teal">
        /&gt;
      </Heading> */}
      </Flex>
    </Card>
  </Layout>
)

export default IndexPage

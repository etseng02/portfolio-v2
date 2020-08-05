import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Heading, Text } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading fontSize={[5, 6, 7]}>Eddie Tseng</Heading>
    <Heading fontSize={[3, 3, 3]}>I make clacky noises on the keyboard</Heading>
    <Text fontFamily="body">
      Hi sometimes when I'm bored I turn coffee into code
    </Text>
  </Layout>
)

export default IndexPage

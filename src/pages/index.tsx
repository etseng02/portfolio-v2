import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Heading, Text, Flex } from "rebass"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Heading fontSize={[5, 6, 7]}>Eddie Tseng</Heading>
    <Flex flexDirection="row">
      <Heading fontSize={[3, 4, 5]} style={{ color: "#5fb3b3" }}>
        &lt;
      </Heading>
      <Heading fontSize={[3, 4, 5]} style={{ color: "#FAC863" }}>
        WebDeveloper
      </Heading>
      <Heading fontSize={[3, 4, 5]} style={{ color: "#5fb3b3" }}>
        /&gt;
      </Heading>
    </Flex>
  </Layout>
)

export default IndexPage

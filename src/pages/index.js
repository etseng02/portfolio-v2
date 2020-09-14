import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Card, Heading, Text, Flex } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Heading color="text" fontSize={[5, 6, 7]}>
      Eddie Tseng
    </Heading>
    <Flex flexDirection="row">
      <Heading fontSize={[3, 4, 5]} color="teal">
        &lt;
      </Heading>
      <Heading fontSize={[3, 4, 5]} color="yellow">
        WebDeveloper
      </Heading>
      <Heading fontSize={[3, 4, 5]} color="teal">
        /&gt;
      </Heading>
    </Flex>
  </Layout>
)

export default IndexPage

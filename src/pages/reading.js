import React from "react"
import SEO from "../components/SEO"

import Layout from "../components/Layout"
import { Card, Heading } from "rebass"

const ReadingPage = () => (
  <Layout>
    <SEO title="Home" />

    <Heading mb={2} color="text" fontSize={[5, 6, 6]}>
      Reading
    </Heading>
  </Layout>
)

export default ReadingPage

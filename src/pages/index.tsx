import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Heading } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading fontFamily="mono" fontSize={[5, 5, 5]}>
      Hello, my name is Eddie Tseng
    </Heading>
    <Heading fontFamily="mono" fontSize={[3, 3, 3]}>
      I make clacky noises on the keyboard
    </Heading>
  </Layout>
)

export default IndexPage

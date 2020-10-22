import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { Box, Heading, Text, Button, Flex, Link } from "rebass"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Box backgroundColor="muted" py={[5, 5, 6]} mb={[3, 4, 4]}>
      <Flex flexDirection="column" alignItems="center">
        <Heading variant="underline" color="secondary">
          UNDER CONSTRUCTION
        </Heading>
        <Text color="secondary" mt={3}>
          Check back later!
        </Text>
        <Box>
          <Link href="/" width="auto">
            <Button
              sx={{ borderColor: "secondary" }}
              mt={3}
              alignSelf="center"
              color="secondary"
            >
              Back to Home
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  </Layout>
)

export default NotFoundPage

import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { Box, Heading, Text, Button, Flex, Link } from "rebass"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box>
      <Box backgroundColor="muted" py={[5, 5, 6]} mb={[3, 4, 4]}>
        <Flex flexDirection="column" alignItems="center">
          <Heading variant="underline" color="secondary">
            NOT FOUND
          </Heading>
          <Text color="secondary" mt={3}>
            This route doesn&#39;t exist.
          </Text>
          <Box>
            <Link href="/" width="auto">
              <Button
                mt={3}
                sx={{
                  borderColor: "secondary",
                  color: "secondary",
                }}
              >
                Back to Home
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Layout>
)

export default NotFoundPage

import React from 'react'
import { Box, Text, Navbar, Link } from './components'

const GetStarted = () => {
  return (
    <Box bg="purple" flexDirection="column" color="white" height="100%">
      <Navbar bg="purple" />

      <Box flexDirection="column" px={8}>
        <Text fontWeight="300" textAlign="left" lineHeight="1.3" fontSize={2}>
          One of the best ways to prepare your future is to choose a challenge
          that you want to work on.
        </Text>

        <Text
          fontWeight="300"
          textAlign="left"
          lineHeight="1.3"
          fontSize={2}
          my={9}
        >
          Through the innovative Challenge Cards, you will select 3 challenges
          that you want to explore.
        </Text>

        <Link
          fontSize="1.6rem"
          fontWeight="600"
          to="/instructions"
          variant="pill"
          bg="white"
          px={6}
          py={4}
          width="26rem"
          mx="auto"
          textAlign="center"
        >
          Next
        </Link>
      </Box>
    </Box>
  )
}

export default GetStarted

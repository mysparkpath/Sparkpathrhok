import React from 'react'
import { Box, Text, Navbar, Link } from './components'
import { Link as ReachLink } from '@reach/router'

const GetStarted = () => {
  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1">
      <Navbar bg="purple" />

      <Box flexDirection="column" alignItems="center" mx={6}>
        <Text
          fontWeight="300"
          textAlign="left"
          lineHeight="1.3"
          fontSize={2}
          maxWidth="45rem"
        >
          One of the best ways to prepare your future is to choose a challenge
          that you want to work on.
        </Text>

        <Text
          fontWeight="300"
          textAlign="left"
          lineHeight="1.3"
          fontSize={2}
          my={9}
          maxWidth="45rem"
        >
          Through the innovative Challenge Cards, you will select 3 challenges
          that you want to explore.
        </Text>

        <Link
          as={ReachLink}
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
          boxShadow={0}
        >
          Next
        </Link>
      </Box>
    </Box>
  )
}

export default GetStarted

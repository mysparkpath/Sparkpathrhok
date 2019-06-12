import React from 'react'
import { Box, Text, Navbar, Link } from './components'

const Main = () => {
  return (
    <Box bg="purple" flexDirection="column" color="white" height="100%">
      <Navbar bg="purple" />
      <Box flexDirection="column" px={8}>
        <Text textAlign="left" fontSize={5} fontWeight="600" lineHeight="1.3">
          Discover the <br /> challenges <br /> that you want
        </Text>

        <Box my={9} mx="auto">
          Cards here
        </Box>

        <Link
          fontSize="1.6rem"
          fontWeight="600"
          to="/get-started"
          variant="pill"
          bg="white"
          px={6}
          py={4}
          width="26rem"
          mx="auto"
          textAlign="center"
        >
          Get started
        </Link>
      </Box>
    </Box>
  )
}

export default Main

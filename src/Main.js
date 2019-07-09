import React from 'react'
import { Box, Text, Navbar, Link } from './components'
import { Link as ReachLink } from '@reach/router'
import { ReactComponent as CardsSVG } from './static/icons/cards.svg'
import styled from 'styled-components'

const Cards = styled(CardsSVG)`
  width: 25rem;
  height: 28rem;
`

const Main = () => {
  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1" pb="8">
      <Navbar bg="purple" />
      <Box flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize={5} fontWeight="600" lineHeight="1.3">
          Discover the <br /> challenges <br /> that you want <br /> to work on.
        </Text>

        <Box my={6} mx="auto">
          <Cards />
        </Box>

        <Link
          as={ReachLink}
          fontSize="1.6rem"
          fontWeight="600"
          to="/get-started"
          variant="pill"
          width="26rem"
          mx="auto"
          text-align="center"
          box-shadow={0}
          bg="white"
          px={6}
          py={4}
        >
          Get started
        </Link>
      </Box>
    </Box>
  )
}

export default Main

import React from 'react'
import { Box, Text, Navbar, Link } from './components'
import { Link as ReachLink } from '@reach/router'
import { ReactComponent as CardsSVG } from './static/icons/cards.svg'
import styled from 'styled-components'

const Cards = styled(CardsSVG)`
  width: rem;
`

const Main = () => {
  return (
    <Box bg="purple" flexDirection="column" color="white" height="100%">
      <Navbar bg="purple" />
      <Box flexDirection="column" alignItems="center" px={8}>
        <Text textAlign="center" fontSize={5} fontWeight="600" lineHeight="1.3">
          Discover the <br /> challenges <br /> that you want
        </Text>

        <Box my={10} mx="auto">
          <Cards />
        </Box>

        <Link
          as={ReachLink}
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
          boxShadow={0}
        >
          Get started
        </Link>
      </Box>
    </Box>
  )
}

export default Main

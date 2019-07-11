import React from 'react'
import { Box, Text, Navbar, Link } from './components'
import { Link as ReachLink } from '@reach/router'
import strings from './strings'
import { useLanguage } from './state'

const GetStarted = () => {
  const { lang } = useLanguage()
  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1">
      <Navbar bg="purple" />

      <Box flexDirection="column" alignItems="center" mx={6}>
        <Text
          fontWeight="300"
          textAlign="left"
          lineHeight="1.5"
          fontSize={2}
          maxWidth="45rem"
        >
          {strings.prepare[lang]}
        </Text>

        <Text
          fontWeight="300"
          textAlign="left"
          lineHeight="1.5"
          fontSize={2}
          my={9}
          maxWidth="45rem"
        >
          {strings.innovativeFuture[lang]}
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
          text-align="center"
          box-shadow={0}
        >
          {strings.next[lang]}
        </Link>
      </Box>
    </Box>
  )
}

export default GetStarted

import React from 'react'
import { Box, Text, Navbar, Link } from './components'
import { ReactComponent as Int } from './static/icons/interested.svg'
import { ReactComponent as NotInt } from './static/icons/not-interested.svg'
import { ReactComponent as VeryInt } from './static/icons/very-interested.svg'
import styled, { css } from 'styled-components'
import { Link as ReachLink } from '@reach/router'
import { darken } from 'polished'
import { space } from 'styled-system'
import strings from './strings'
import { useLanguage } from './state'

const iconStyles = css`
  height: 6rem;
`

const IntIcon = styled(Int)`
  ${iconStyles}

  ${space}

  .st0 {
    fill: ${darken(0.15, '#9d70c7')};
  }
`

const NotIntIcon = styled(NotInt)`
  ${iconStyles}

  .st0 {
    fill: #9d70c7;
  }
`

const VeryIntIcon = styled(VeryInt)`
  ${iconStyles}
`

const Instructions = () => {
  const { lang } = useLanguage()
  return (
    <Box flexDirection="column" flex="1">
      <Navbar light />

      <Box flexDirection="column" alignItems="center" mx={6}>
        <Text textAlign="left" fontWeight="300">
          {strings.firstStep[lang]}
        </Text>

        <Box justifyContent="center" my={8}>
          <NotIntIcon />
          <IntIcon mx={8} />
          <VeryIntIcon />
        </Box>

        <Link
          as={ReachLink}
          fontSize="1.6rem"
          fontWeight="600"
          to="/cards"
          variant="pill"
          bg="white"
          px={6}
          py={4}
          width="26rem"
          mx="auto"
          textAlign="center"
          boxShadow={0}
        >
          {strings.ready[lang]}
        </Link>
      </Box>
    </Box>
  )
}

export default Instructions

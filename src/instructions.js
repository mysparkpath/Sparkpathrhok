import React from 'react'
import { Box, Text, Navbar, Link } from './components'
import { ReactComponent as Int } from './static/icons/interested-outline.svg'
import { ReactComponent as NotInt } from './static/icons/not-interested-outline.svg'
import { ReactComponent as VeryInt } from './static/icons/very-interested-outline.svg'
import styled, { css } from 'styled-components'

const iconStyles = css`
  height: 4rem;
  width: 4rem;
  margin-right: 2rem;
  background: purple;
`
const IntIcon = styled(Int)`
  ${iconStyles}
`

const NotIntIcon = styled(NotInt)`
  ${iconStyles}
`

const VeryIntIcon = styled(VeryInt)`
  ${iconStyles}
`

const choiceProps = {
  display: 'flex',
  mt: '1.5rem',
  alignitems: 'center',
  fontSize: '2.6rem',
  fontWeight: '600',
}

const Instructions = () => {
  return (
    <Box flexDirection="column" height="100%">
      <Navbar />

      <Box flexDirection="column" px={8}>
        <Text textAlign="left">
          Your first step is to sort 29 challenges into three categories:
        </Text>

        <Box justifyContent="center" my={8}>
          <VeryIntIcon />
          <IntIcon />
          <NotIntIcon />
        </Box>

        <Link
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
        >
          I'm ready!
        </Link>
      </Box>
    </Box>
  )
}

export default Instructions

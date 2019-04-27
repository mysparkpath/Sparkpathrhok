import React from 'react'
import { Link } from '@reach/router'
import { Box, Text } from './components'
import { ReactComponent as Int } from './static/icons/interested.svg'
import { ReactComponent as NotInt } from './static/icons/not-interested.svg'
import { ReactComponent as VeryInt } from './static/icons/very-interested.svg'
import styled, { css } from 'styled-components'

const iconStyles = css`
  height: 3rem;
  margin-right: 1.5rem;
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

const paraProps = {
  mt: '2rem',
  fontSize: '1.4rem',
  fontWeight: '300',
}

const StyledLink = styled(Link)`
  background: white;
  border-radius: 50px;
  align-self: center;
  padding: 1.2rem 2.6rem;
  margin-top: 3rem;
`

const Main = () => {
  return (
    <Box
      alignItems="center"
      bg="rgb(113, 69, 154)"
      flexDirection="column"
      color="white"
      py="4rem"
      height="100vh"
    >
      <h1>SparkPath</h1>

      <Box maxWidth="650px" flexDirection="column" px="3rem">
        <Text fontSize="1.6rem" fontWeight="600">
          What do you want to do after high school?
        </Text>

        <Text {...paraProps}>
          Use the SparkPath Challenge Cards to discover a new, innovative way to
          prepare for your future.
        </Text>

        <Text {...paraProps}>
          One of the best ways to prepare your future is to choose a challenge
          that you want to work on.
        </Text>

        <Text {...paraProps}>
          To help you make this choice sort the deck into three piles:
        </Text>

        <Box
          mt="2rem"
          flexDirection="column"
          alignItems="flex-start"
          m="0 auto"
        >
          <Text
            display="flex"
            mt="1.5rem"
            alignItems="center"
            fontSize="1.6rem"
            fontWeight="600"
          >
            <VeryIntIcon />
            Very interested
          </Text>
          <Text
            display="flex"
            mt="1.5rem"
            alignItems="center"
            fontSize="1.6rem"
            fontWeight="600"
          >
            <IntIcon />
            Interested
          </Text>
          <Text
            display="flex"
            mt="1.5rem"
            alignItems="center"
            fontSize="1.6rem"
            fontWeight="600"
          >
            <NotIntIcon />
            Not Interested
          </Text>
        </Box>
      </Box>

      <StyledLink to="/cards">
        <Text fontSize="1.4rem" fontWeight="600" textTransform="uppercase">
          Get started!
        </Text>
      </StyledLink>
    </Box>
  )
}

export default Main

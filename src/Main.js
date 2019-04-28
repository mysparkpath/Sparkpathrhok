import React from 'react'
import { Link } from '@reach/router'
import { Box, Text } from './components'
import { ReactComponent as Int } from './static/icons/interested.svg'
import { ReactComponent as NotInt } from './static/icons/not-interested.svg'
import { ReactComponent as VeryInt } from './static/icons/very-interested.svg'
import Logo from './static/icons/logo-white.png'
import styled, { css } from 'styled-components'

const iconStyles = css`
  height: 4rem;
  margin-right: 2rem;
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

const MainLogo = styled.img`
  height: 6rem;
`

const paraProps = {
  mt: '2.2rem',
  fontSize: '2.2rem',
  fontWeight: '300',
}

const choiceProps = {
  display: 'flex',
  mt: '1.5rem',
  alignitems: 'center',
  fontSize: '2.6rem',
  fontWeight: '600',
}

const StyledLink = styled(Link)`
  background: white;
  border-radius: 50px;
  align-self: center;
  padding: 2.4rem 4.6rem;
  margin-top: 4rem;
  box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);
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
      <MainLogo src={Logo} />

      <Box mt="3rem" maxWidth="650px" flexDirection="column" px="3rem">
        <Text lineHeight="1.2" mb="2rem" fontSize="2.6rem" fontWeight="600">
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
          <Text {...choiceProps}>
            <VeryIntIcon />
            Very Interested
          </Text>
          <Text {...choiceProps}>
            <IntIcon />
            Interested
          </Text>
          <Text {...choiceProps}>
            <NotIntIcon />
            Not Interested
          </Text>
        </Box>
      </Box>

      <StyledLink to="/cards">
        <Text fontSize="2rem" fontWeight="600" textTransform="uppercase">
          Get started!
        </Text>
      </StyledLink>
    </Box>
  )
}

export default Main

import React from 'react'
import { Box, Text } from '../components'
import { Link } from '@reach/router'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  background: white;
  border-radius: 50px;
  align-self: center;
  padding: 2.4rem 5.5rem;
  margin-top: 6rem;
  box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);
`

const Congrats = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      bg="rgb(113, 69, 154)"
      flexDirection="column"
      color="white"
      px="4rem"
      height="100vh"
    >
      <Text as="h2" fontWeight="600" fontSize="4rem">
        Nice job!{' '}
        <span role="img" aria-label="star emoji">
          ⭐️
        </span>
      </Text>
      <Text maxWidth="32rem" mt="4rem" fontSize="2.6rem" lineHeight="1.2">
        Now let’s narrow down to find out the ones that interest you most.
      </Text>

      <StyledLink mt="2rem" to="/implement-me">
        <Text
          color="rgb(113, 69, 154)"
          fontSize="2rem"
          fontWeight="600"
          textTransform="uppercase"
        >
          Let's do it!
        </Text>
      </StyledLink>
    </Box>
  )
}

export default Congrats

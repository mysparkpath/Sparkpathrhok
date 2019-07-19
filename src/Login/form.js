import React from 'react'
import { Box, Text, Navbar, Link } from '../components'
import { Google } from 'styled-icons/boxicons-logos/Google'
import styled from 'styled-components'
import { theme } from '../components/theme'

const GoogleIcon = ({ onClick }) => {
  const StyledIcon = styled(Google)`
    color: white;
    opacity: 0.5;
    border: solid 0.1rem;
    border-radius: 1rem;
    width: 5rem;
    height: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  `
  return <StyledIcon onClick={onClick} />
}
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: white;
  width: 80%;
  border: none;
  border-radius: 3px;
`
const StyledButton = styled.button`
  background: ${props => props.backgroundColor || 'white'};
  border-radius: 10px;
  align-self: center;
  padding: 1rem 4rem;
  margin-top: 4rem;
  width: 70%;
  color: ${props => props.inputColor || theme.colors.black};
`
const Form = ({ signIn }) => {
  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1">
      <Navbar bg="purple" />
      <Box flexDirection="column" alignItems="center" mx={6}>
        {
          <Text
            textAlign="center"
            fontSize={5}
            fontWeight="600"
            lineHeight="1.3"
            maxWidth="50rem"
          >
            {/* TODO: Add this text to the strings file */}
            Login with
          </Text>
        }
        <Box py="2rem" flexDirection="row" px="2rem" alignItems="center">
          <GoogleIcon width="100%" height="100%" />
          <GoogleIcon onClick={signIn} />
          <GoogleIcon width="100%" height="100%" />
        </Box>
        <Text
          textAlign="center"
          fontSize={5}
          fontWeight="600"
          lineHeight="1.3"
          maxWidth="50rem"
        >
          {/* TODO: Add this text to the strings file */}
          Or
        </Text>
        <Box py="5rem" flexDirection="column" px="5rem" alignItems="center">
          <form>
            <label>
              <Input type="text" placeholder="Username or Email" />
            </label>
            <label>
              <Input type="text" placeholder="Password" />
            </label>
            <Text
              textAlign="left"
              fontSize={2}
              fontWeight="60"
              lineHeight="1.3"
              maxWidth="50rem"
              px="4rem"
            >
              Forget your password?
            </Text>
            <StyledButton
              type="submit"
              value="Submit"
              inputColor={theme.colors.purple}
            >
              <Text
                textAlign="center"
                fontSize={5}
                fontWeight="60"
                lineHeight="1.3"
                maxWidth="50rem"
                px="4rem"
              >
                Login
              </Text>
            </StyledButton>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Form

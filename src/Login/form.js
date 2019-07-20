import React, { useState } from 'react'
import { Box, Text, Navbar } from '../components'
import { Google } from 'styled-icons/boxicons-logos/Google'
import { Facebook } from 'styled-icons/boxicons-logos/Facebook'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import styled from 'styled-components'
import { theme } from '../components/theme'
import strings from '../strings'
import { useLanguage } from '../state'

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
  return <StyledIcon onClick={() => onClick('google')} />
}
const FacebookIcon = ({ onClick }) => {
  const StyledIcon = styled(Facebook)`
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
  return <StyledIcon onClick={() => onClick('facebook')} />
}
const TwitterIcon = ({ onClick }) => {
  const StyledIcon = styled(Twitter)`
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
  return <StyledIcon onClick={() => onClick('twitter')} />
}
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'black'};
  background: white;
  width: 40rem;
  border: none;
  border-radius: 3px;
`
const StyledButton = styled.button`
  background: ${props => props.backgroundColor || 'white'};
  border-radius: 10px;
  align-self: center;
  padding: 1rem 4rem;
  margin-top: 4rem;
  color: ${props => props.inputColor || theme.colors.black};
`

const handleChange = ({ target }, field, formContents, setForm) => {
  formContents[field] = target.value
  setForm({ ...formContents })
}
const handleSubmit = (event, form, loginWithEmail) => {
  event.preventDefault()
  if (form.email.length < 1) return window.alert('Please enter an email')
  if (form.password.length < 1) return window.alert('Please enter a password')
  console.log('submit')
  loginWithEmail(form)
}

const Form = ({ signIn, loginWithEmail }) => {
  const { lang } = useLanguage()
  const [formContents, setForm] = useState({
    email: '',
    password: '',
  })
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
            {strings.loginWith[lang]}
          </Text>
        }
        <Box py="2rem" flexDirection="row" px="2rem" alignItems="center">
          <FacebookIcon onClick={signIn} width="100%" height="100%" />
          <GoogleIcon onClick={signIn} />
          <TwitterIcon onClick={signIn} width="100%" height="100%" />
        </Box>
        <Text
          textAlign="center"
          fontSize={5}
          fontWeight="600"
          lineHeight="1.3"
          maxWidth="50rem"
        >
          {/* TODO: Add this text to the strings file */}
          {strings.or[lang]}
        </Text>
        <Box
          py="5rem"
          flexDirection="column"
          px="5rem"
          alignItems="center"
          style={{ 'padding-top': '2rem', display: 'block' }}
        >
          <form
            onSubmit={event =>
              handleSubmit(event, formContents, loginWithEmail)
            }
          >
            <label>
              <Input
                type="text"
                value={formContents.email}
                placeholder={strings.emailField[lang]}
                onChange={event =>
                  handleChange(event, 'email', formContents, setForm)
                }
              />
            </label>
            <label>
              <Input
                type="password"
                value={formContents.password}
                placeholder={strings.passwordField[lang]}
                onChange={event =>
                  handleChange(event, 'password', formContents, setForm)
                }
              />
            </label>
            <Text
              textAlign="left"
              fontSize={2}
              fontWeight="60"
              lineHeight="1.3"
              maxWidth="50rem"
              px="4rem"
              style={{ 'text-align': 'center', 'padding-left': '10rem' }}
            >
              {strings.forgotPassword[lang]}
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
                {strings.login[lang]}
              </Text>
            </StyledButton>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Form

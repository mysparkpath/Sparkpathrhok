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
  margin-left: 5rem;
  color: ${props => props.inputColor || 'black'};
  background: white;
  width: 40rem;
  display: block;
  border: none;
  border-radius: 3px;
`
const StyledButton = styled.button`
  background: ${props => props.backgroundColor || 'white'};
  border-radius: 10px;
  align-self: center;
  padding: 1rem 4rem;
  margin-top: 2rem;
  color: ${props => props.inputColor || theme.colors.black};
`

const handleChange = ({ target }, field, formContents, setForm) => {
  formContents[field] = target.value
  setForm({ ...formContents })
}
const handleSubmit = (event, form, raiseSubmit) => {
  event.preventDefault()
  for (const field in form) {
    if (form[field].length < 1) return window.alert(`Please enter a ${field}`)
  }
  console.log('submit')
  raiseSubmit(form)
}

const Form = ({
  title,
  signIn,
  raiseSubmit,
  labels,
  forgotPassword,
  buttonLabel,
  enableIcons,
}) => {
  const { lang } = useLanguage()
  let fields = {}
  labels.forEach(label => (fields[label] = ''))
  const [formContents, setForm] = useState(fields)
  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1">
      <Box flexDirection="column" alignItems="left">
        {
          <Text
            textAlign="left"
            fontSize={5}
            fontWeight="600"
            lineHeight="1.3"
            maxWidth="50rem"
            paddingLeft="0"
          >
            {title}
          </Text>
        }
        <Box
          py="5rem"
          flexDirection="column"
          alignItems="center"
          style={{
            'padding-top': '2rem',
            'padding-bottom': '2rem',
            display: 'block',
          }}
        >
          <form
            onSubmit={event => handleSubmit(event, formContents, raiseSubmit)}
          >
            {labels.map(label => (
              <>
                <Text
                  textAlign="left"
                  fontSize={3}
                  fontWeight="200"
                  lineHeight="1.3"
                  width="80%"
                >
                  {strings[`${label}Field`][lang]}
                </Text>
                <Input
                  type={
                    label.toLowerCase().includes('password')
                      ? 'password'
                      : 'text'
                  }
                  value={formContents[label]}
                  onChange={e => handleChange(e, label, formContents, setForm)}
                />
              </>
            ))}
            {forgotPassword && (
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
            )}
            <StyledButton
              type="submit"
              value="Submit"
              inputColor={theme.colors.purple}
            >
              <Text
                textAlign="center"
                fontSize={3}
                fontWeight="60"
                lineHeight="1.3"
                maxWidth="50rem"
                px="4rem"
              >
                {buttonLabel}
              </Text>
            </StyledButton>
          </form>
        </Box>
        {enableIcons && (
          <React.Fragment>
            <Text
              textAlign="left"
              fontSize={3}
              fontWeight="600"
              lineHeight="1.3"
              maxWidth="50rem"
            >
              {'Or, use another account:'}
            </Text>
            <Box
              py="2rem"
              flexDirection="row"
              px="2rem"
              alignItems="center"
              margin="auto"
            >
              <FacebookIcon
                onClick={signIn}
                width="100%"
                height="100%"
                margin="auto"
              />
              <GoogleIcon onClick={signIn} />
              <TwitterIcon onClick={signIn} width="100%" height="100%" />
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  )
}

export default Form

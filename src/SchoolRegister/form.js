import React, { useState } from 'react'
import { Box, Text, Navbar } from '../components'
import { Google } from 'styled-icons/boxicons-logos/Google'
import { Facebook } from 'styled-icons/boxicons-logos/Facebook'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import styled from 'styled-components'
import { theme } from '../components/theme'
import strings from '../strings'
import { useLanguage } from '../state'

const Input = styled.input`
  padding: 0.5em;
  margin: auto;
  margin-bottom: 2rem;
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
  color: ${props => props.inputColor || theme.colors.black};
`
const handleChange = ({ target }, field, formContents, setForm) => {
  formContents[field] = target.value
  setForm({ ...formContents })
}

const handleSubmit = (event, form, register) => {
  event.preventDefault()
  if (form.name.length < 1) return window.alert('Please enter a name')
  if (form.school.length < 1) return window.alert('Please enter a school')
  if (isNaN(form.numberOfCodes))
    return window.alert('Please enter a valid number of codes')
  if (form.password != form.confirmPassword)
    return window.alert('Your password do not match')
  if (form.password.length < 6)
    return window.alert('Your password must be at least 6 characters')

  // Generate license code
  let code = form.school
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
  form.code = code
  register(form)
}

const Form = ({ signIn, register }) => {
  const { lang } = useLanguage()
  const [formContents, setForm] = useState({
    name: '',
    school: '',
    email: '',
    numberOfCodes: '',
    password: '',
    confirmPassword: '',
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
            {strings.schoolRegister[lang]}
          </Text>
        }

        <Box
          py="5rem"
          flexDirection="column"
          px="5rem"
          alignItems="center"
          style={{ 'padding-top': '2rem', display: 'block' }}
        >
          <form onSubmit={event => handleSubmit(event, formContents, register)}>
            <label>
              <Input
                type="text"
                value={formContents.name}
                placeholder={strings.nameField[lang]}
                onChange={event =>
                  handleChange(event, 'name', formContents, setForm)
                }
              />
            </label>
            <label>
              <Input
                type="text"
                value={formContents.school}
                placeholder={strings.schoolField[lang]}
                onChange={event =>
                  handleChange(event, 'school', formContents, setForm)
                }
              />
            </label>
            <label>
              <Input
                type="text"
                value={formContents.numberOfCodes}
                placeholder={strings.numberOfCodesField[lang]}
                onChange={event =>
                  handleChange(event, 'numberOfCodes', formContents, setForm)
                }
              />
            </label>
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
            <label>
              <Input
                type="password"
                value={formContents.confirmPassword}
                placeholder={strings.confirmPasswordField[lang]}
                onChange={event =>
                  handleChange(event, 'confirmPassword', formContents, setForm)
                }
              />
            </label>

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
                {strings.purchase[lang]}
              </Text>
            </StyledButton>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Form

import React from 'react'
import { Box, Text } from '../components'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'
import Form from '../components/form'
import strings from '../strings'
import { useLanguage, useUser } from '../state'
import img from '../images/challengeCards.png'

const database = Firebase.database()

// Add border-radius: 50px;
// box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);back
const LeftImage = styled.div`
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 50rem;
`

const signIn = (setUser, signInOption, navigate, lang) => {
  const authCreators = {
    google: new Firebase.auth.GoogleAuthProvider(),
    facebook: new Firebase.auth.FacebookAuthProvider(),
    twitter: new Firebase.auth.TwitterAuthProvider(),
  }

  const provider = authCreators[signInOption]
  Firebase.auth().languageCode =
    signInOption === 'facebook' && lang === 'fr' ? 'fr_FR' : lang

  // Authenticate user
  // TODO: Change to async/await functionality
  Firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
      const user = result.user
      callDatabase(user, setUser)

      navigate('/home')
    })
    .catch(err => console.error(err))
}
const register = (setUser, form, navigate) => {
  Firebase.auth()
    .createUserWithEmailAndPassword(form.email, form.password)
    .then(async result => {
      const user = {
        ...result.user,
        firstName: form.firstName,
        lastName: form.lastName,
        licenseCode: form.licenseCode,
      }
      const successfulCall = await callDatabase(user, setUser)
      if (!successfulCall) throw { code: null, message: 'Invalid license code' }
      navigate('/home')
    })
    .catch(err => {
      // Handle Errors here.
      window.alert(err.message)
      console.error(err.code, err.message)
      // ...
    })
}

const callDatabase = async (
  { email, firstName, lastName, uid: userId, admin, licenseCode },
  setUser
) => {
  const user = await new Promise((res, rej) => {
    database
      .ref(`${licenseCode}` + (admin ? `admin/${userId}` : `users/${userId}`))
      .on('value', snapshot => res(snapshot.val()))
  })
  if (!user) {
    // TODO: Add logic to determine the number of license codes remaining
    const exists = await new Promise((res, rej) => {
      database
        .ref(`${licenseCode}`)
        .on('value', snapshot => res(snapshot.exists()))
    })
    if (!exists) return false
    return await new Promise((res, rej) => {
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        uid: userId,
        licenseCode,
      }
      database
        .ref(
          `${licenseCode}/` + (admin ? `admin/${userId}` : `users/${userId}`)
        )
        .set(newUser)
      setUser({ ...newUser, saved: true })
      res(true)
      rej('Failed to add to database')
    })
  } else setUser({ ...user, saved: true })
}

const Register = ({ navigate }) => {
  const { lang } = useLanguage()
  const { setUser } = useUser()

  return (
    <React.Fragment>
      <Box bg="purple" flexDirection="column" color="white" flex="1">
        <Navbar bg="purple" />
        <Box flexDirection="row">
          <Box width="60%" flexDirection="column" alignItems="center">
            <Text
              textAlign="left"
              fontSize={5}
              fontWeight="200"
              lineHeight="1.3"
              width="80%"
            >
              Join thousands of students who are using the Challenge mindset to
              build their career.{' '}
            </Text>
            <LeftImage />
          </Box>
          <Box width="40%" px="5rem">
            <Form
              path="/register"
              enableIcons={true}
              signIn={signInOption =>
                signIn(setUser, signInOption, navigate, lang)
              }
              title={'Get started today.'}
              labels={[
                'firstName',
                'lastName',
                'email',
                'password',
                'licenseCode',
              ]}
              raiseSubmit={form => register(setUser, form, navigate, lang)}
              buttonLabel={'Start now'}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Register

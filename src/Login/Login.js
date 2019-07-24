import React from 'react'
import { Box, Text, Navbar } from '../components'
import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'
import { firebaseConfig } from './config'
import Form from '../components/form'
import strings from '../strings'
import img from '../images/challengeCards.png'

import { useLanguage, useUser } from '../state'

Firebase.initializeApp(firebaseConfig)
const database = Firebase.database()

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
const loginWithEmail = (setUser, form, navigate) => {
  Firebase.auth()
    .signInWithEmailAndPassword(form.email, form.password)
    .then(async result => {
      const user = { ...result.user }
      const allData = await new Promise((res, rej) => {
        database.ref().on('value', snapshot => res(snapshot.val()))
      })
      let storedUser = null
      for (const school in allData) {
        if (allData[school].admin.hasOwnProperty(user.uid)) {
          storedUser = allData[school].admin[user.uid]
          break
        } else if (allData[school].users.hasOwnProperty(user.uid)) {
          storedUser = allData[school].users[user.uid]
          break
        }
      }
      console.log(storedUser)
      callDatabase(storedUser, setUser)
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
  { email, displayName, uid: userId, school, admin, licenseCode: code },
  setUser
) => {
  const user = await new Promise((res, rej) => {
    database
      .ref(`${code}/` + (admin ? `admin/${userId}` : `users/${userId}`))
      .on('value', snapshot => res(snapshot.val()))
  })
  console.log(user)
  if (!user)
    console.log(
      await new Promise((res, rej) => {
        //TODO: Abstract this code so that we don't need the admin property
        const newUser = {
          displayName: displayName,
          email: email,
          uid: userId,
          admin: admin ? admin : false,
        }
        database
          .ref(`${code}/` + (admin ? `admin/${userId}` : `users/${userId}`))
          .set(newUser)
        setUser({ ...newUser, saved: true })
        res('Successfully added to database')
        rej('Failed to add to database')
      })
    )
  else setUser({ ...user, saved: true })
}

const Login = ({ navigate }) => {
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
              Thank you for being one of thousands of students who are using the
              Challenge mindset to build their career.{' '}
            </Text>
            <LeftImage />
          </Box>
          <Box width="40%" px="5rem">
            <Form
              path="/login"
              signIn={signInOption =>
                signIn(setUser, signInOption, navigate, lang)
              }
              enableIcons={true}
              title={strings.loginWith[lang]}
              labels={['email', 'password']}
              forgotPassword={true}
              raiseSubmit={form =>
                loginWithEmail(setUser, form, navigate, lang)
              }
              buttonLabel={strings.login[lang]}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Login

import React from 'react'
import { Box, Text, Navbar, Link } from '../components'
import Firebase from 'firebase'
import { firebaseConfig } from './config'

Firebase.initializeApp(firebaseConfig)

const Login = () => {
  const provider = new Firebase.auth.GoogleAuthProvider()
  // TODO: Add en/fr language choice
  // Firebase.auth().languageCode =

  // TODO: Change to async/await functionality
  Firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
      // Google Access Token that lets you access Google API
      const token = result.credential.accessToken
      const user = result.user
      console.log(user)
    })
    .catch(err => console.error(err))

  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1">
      <Navbar bg="purple" />
    </Box>
  )
}

export default Login

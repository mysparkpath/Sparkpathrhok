import React, { useState, useEffect } from 'react'
import { Box, Text, Navbar, Link } from '../components'
import Firebase from 'firebase'
import { firebaseConfig } from './config'

Firebase.initializeApp(firebaseConfig)

const auth = setUser => {
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
      setUser(user)
    })
    .catch(err => console.error(err))
}

const Login = () => {
  const [user, setUser] = useState()
  useEffect(() => auth(setUser), [])
  console.log(user)
  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1">
      <Navbar bg="purple" />
      <Box flexDirection="column" alignItems="center" mx={6}>
        {user && (
          <Text
            textAlign="center"
            fontSize={5}
            fontWeight="600"
            lineHeight="1.3"
            maxWidth="50rem"
          >
            Welcome {user.displayName} to the Digital Challenge Cards!
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default Login

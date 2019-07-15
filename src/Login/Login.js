import React, { useState, useEffect, useContext } from 'react'
import { Box, Text, Navbar, Link } from '../components'
import Firebase from 'firebase'
import { firebaseConfig } from './config'
import { DeckContext } from '../App'
import { useLanguage } from '../state'

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
  //const [user, setUser] = useState()
  const { myTop3 } = useContext(DeckContext)
  const { lang } = useLanguage()
  // Remove auth for now
  // useEffect(() => auth(setUser), [])
  const user = { displayName: 'Jason' }
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
        {myTop3.length > 0 && (
          <Text
            textAlign="center"
            fontSize={5}
            fontWeight="600"
            lineHeight="1.3"
            maxWidth="50rem"
            style={{ 'padding-top': '5rem' }}
          >
            Your challenge cards are:
          </Text>
        )}
        <Box
          mt="2rem"
          flexDirection="column"
          alignItems="flex-start"
          color="black"
          px="3rem"
        >
          {myTop3.length > 0 &&
            myTop3.map(({ image_path, altText, variant, en, fr, key }) => {
              const path = require(`../${image_path}`)

              const title = lang === 'en' ? en.title : fr.title

              return (
                <Box
                  key={key}
                  mt="2rem"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Box
                    height="6rem"
                    width="6rem"
                    mr="3rem"
                    bg={variant}
                    justifyContent="center"
                    borderRadius="4px"
                    alignItems="center"
                    flex="1 0 auto"
                  >
                    <img
                      style={{ height: '5rem', width: '5rem' }}
                      src={path}
                      alt={altText}
                    />
                  </Box>

                  <Text
                    color="rgb(255, 255, 255)"
                    textTransform="capitalize"
                    fontSize="1.8rem"
                    textAlign="left"
                  >
                    {title}
                  </Text>
                </Box>
              )
            })}
        </Box>
      </Box>
    </Box>
  )
}

export default Login

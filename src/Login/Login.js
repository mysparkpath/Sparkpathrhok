import React, { useState, useEffect, useContext } from 'react'
import { Box, Text, Navbar, Link } from '../components'
import { Link as ReachLink } from '@reach/router'
import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'
import { firebaseConfig } from './config'
import { DeckContext } from '../App'
import { useLanguage, useTop3 } from '../state'
import strings from '../strings'

Firebase.initializeApp(firebaseConfig)
const database = Firebase.database()

const StyledButton = styled.button`
  background: white;
  border-radius: 50px;
  align-self: center;
  padding: 2.4rem 4.6rem;
  margin-top: 4rem;
  box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);
  color: ${theme.colors.black};
`

const signIn = setUser => {
  const provider = new Firebase.auth.GoogleAuthProvider()
  // TODO: Add en/fr language choice
  // Firebase.auth().languag eCode =

  // Authenticate user
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

const callDatabase = async ({ email, displayName, uid: userId }, setUser) => {
  const user = await new Promise((res, rej) => {
    database.ref('users/' + userId).on('value', snapshot => res(snapshot.val()))
  })
  if (!user)
    console.log(
      await new Promise((res, rej) => {
        database.ref('users/' + userId).set({
          displayName: displayName,
          email: email,
          uid: userId,
        })
        res('Successfully added to database')
        rej('Failed to add to database')
      })
    )
  else return setUser({ ...user, saved: true })
}

const handleSave = async ({ uid: userId }, myTop3) => {
  console.log(userId)
  await new Promise((res, rej) => {
    database.ref('users/' + userId).update({
      myTop3: myTop3,
    })
    console.log('Successfully added to database')
    res('Successfully added to database')
    rej('Failed to add to database')
  })
}

const renderCards = (myTop3, lang) => {
  return (
    myTop3.length > 0 &&
    myTop3.map(({ image_path, altText, variant, en, fr, key }) => {
      const path = require(`../${image_path}`)
      console.log(lang)
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
            // textTransform="capitalize"
            fontSize="1.8rem"
            textAlign="left"
          >
            {title}
          </Text>
        </Box>
      )
    })
  )
}

const Login = () => {
  const [user, setUser] = useState()
  const { top3: myTop3 } = useTop3()
  const { lang } = useLanguage()
  useEffect(() => {
    signIn(setUser)
  }, [])
  // TODO: Refactor the return values into functions
  if (user) {
    if (user.saved !== true) callDatabase(user, setUser)
  }
  if (user) console.log(user.myTop3)
  if (user)
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
              {`${strings.welcome[lang]} ${user.displayName}`}!
            </Text>
          }

          <Text
            textAlign="center"
            fontSize={5}
            fontWeight="600"
            lineHeight="1.3"
            maxWidth="50rem"
            style={{ 'padding-top': '5rem' }}
          >
            {user.myTop3
              ? strings.savedCards[lang]
              : myTop3.length > 0 && 'Your challenge cards are:'}
          </Text>

          <Box
            mt="2rem"
            flexDirection="column"
            alignItems="flex-start"
            color="black"
            px="3rem"
          >
            {user.myTop3
              ? renderCards(user.myTop3, lang)
              : renderCards(myTop3, lang)}
          </Box>
        </Box>
        {myTop3.length > 0 && (
          <Box py="5rem" flexDirection="column" px="5rem" alignItems="center">
            <StyledButton onClick={() => handleSave(user, myTop3)}>
              Save Challenge Cards
            </StyledButton>
          </Box>
        )}
      </Box>
    )
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
            Please sign in...
          </Text>
        }
      </Box>
    </Box>
  )
}

export default Login

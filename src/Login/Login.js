import React, { useState, useEffect, useContext } from 'react'
import { Box, Text, Navbar, Link } from '../components'
import { Router } from '@reach/router'
import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'
import { firebaseConfig } from './config'
import Form from './form'
import { DeckContext } from '../App'
import { useLanguage, useTop3, useUser } from '../state'

import strings from '../strings'

Firebase.initializeApp(firebaseConfig)
const database = Firebase.database()

// Add border-radius: 50px;
// box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);back
const StyledButton = styled.button`
  background: ${props => props.backgroundColor || 'white'};
  border-radius: 10px;
  align-self: center;
  padding: 1rem 4rem;
  margin-top: 4rem;
  width: 70%;
  color: ${props => props.inputColor || theme.colors.black};
`

const signIn = (setUser, signInOption, navigate) => {
  const provider =
    signInOption === 'google'
      ? new Firebase.auth.GoogleAuthProvider()
      : new Firebase.auth.FacebookAuthProvider()
  // TODO: Add en/fr language choice
  // Firebase.auth().languag eCode =

  // Authenticate user
  // TODO: Change to async/await functionality
  Firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
      // Google Access Token that lets you access Google API
      const user = result.user
      callDatabase(user, setUser)
      console.log(user)
      navigate('/home')
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
        const newUser = { displayName: displayName, email: email, uid: userId }
        database.ref('users/' + userId).set(newUser)
        setUser({ ...newUser, saved: true })
        res('Successfully added to database')
        rej('Failed to add to database')
      })
    )
  else setUser({ ...user, saved: true })
}

const Login = ({ navigate }) => {
  const { top3: myTop3 } = useTop3()
  const { lang } = useLanguage()
  const { user, setUser } = useUser()

  // TODO: Refactor the return values into functions
  return (
    <Form
      path="/login"
      signIn={signInOption => signIn(setUser, signInOption, navigate)}
    />
  )
}

export default Login

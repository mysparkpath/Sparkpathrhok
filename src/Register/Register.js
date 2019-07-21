import React from 'react'

import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'
import Form from './form'

import { useLanguage, useUser } from '../state'

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
        displayName: form.name,
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
  { email, displayName, uid: userId, admin, licenseCode },
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
        displayName: displayName,
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
    <Form
      path="/register"
      signIn={signInOption => signIn(setUser, signInOption, navigate, lang)}
      register={form => register(setUser, form, navigate, lang)}
    />
  )
}

export default Register

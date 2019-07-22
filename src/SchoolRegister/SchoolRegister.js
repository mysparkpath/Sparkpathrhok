import React from 'react'

import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'
import { firebaseConfig } from './config'
import Form from '../components/form'
import strings from '../strings'
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
const registerSchool = (setUser, form, navigate) => {
  Firebase.auth()
    .createUserWithEmailAndPassword(form.email, form.password)
    .then(result => {
      let code = form.school
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
      form.code = code

      const user = {
        ...result.user,
        displayName: form.name,
        admin: true,
        school: form.school,
        code: form.code,
      }
      console.log(user)
      callDatabase(user, setUser)
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
  { email, displayName, uid: userId, school, admin, code },
  setUser
) => {
  const user = await new Promise((res, rej) => {
    database
      .ref(`${code}/` + (admin ? `admin/${userId}` : `users/${userId}`))
      .on('value', snapshot => res(snapshot.val()))
  })
  if (!user)
    console.log(
      await new Promise((res, rej) => {
        const newUser = {
          displayName: displayName,
          email: email,
          uid: userId,
          school: school,
          admin: true,
          licenseCode: code,
        }
        database
          .ref(`${code}/` + (admin ? `admin/${userId}` : `users/${userId}`))
          .set(newUser)
        database.ref(`${code}/users/`).set({ set: true })
        setUser({ ...newUser, saved: true })
        res('Successfully added to database')
        rej('Failed to add to database')
      })
    )
  else setUser({ ...user, saved: true })
}

const SchoolRegister = ({ navigate }) => {
  const { lang } = useLanguage()
  const { setUser } = useUser()

  return (
    <Form
      enableIcons={false}
      title={strings.schoolRegister[lang]}
      labels={[
        'name',
        'school',
        'numberOfCodes',
        'email',
        'password',
        'confirmPassword',
      ]}
      raiseSubmit={form => registerSchool(setUser, form, navigate, lang)}
      buttonLabel={strings.register[lang]}
    />
  )
}

export default SchoolRegister

import React from 'react'
import { Box, Text, Navbar, Link } from '../components'
import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'
import { firebaseConfig } from './config'
import Form from '../components/form'
import strings from '../strings'

import { useLanguage, useUser } from '../state'
import img from '../images/challengeCards.png'

const database = Firebase.database()

const LeftImage = styled.div`
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 50rem;
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
    <React.Fragment>
      <Box bg="purple" flexDirection="column" color="white" flex="1">
        <Navbar bg="purple" />
        <Box flexDirection="row">
          <Box
            width="60%"
            height="100%"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              textAlign="left"
              fontSize={5}
              fontWeight="200"
              lineHeight="1.3"
              width="80%"
              height="100vh"
            >
              Join hundreds of schools who are using the Challenge mindset to
              flip the career development model.
            </Text>
            <LeftImage />
          </Box>
          <Box width="40%" height="100vh" px="5rem">
            <Form
              enableIcons={false}
              title={'Get Started Today.'}
              labels={[
                'firstName',
                'lastName',
                'school',
                'email',
                'password',
                'confirmPassword',
              ]}
              raiseSubmit={form =>
                registerSchool(setUser, form, navigate, lang)
              }
              buttonLabel={'Start now'}
            />
          </Box>
        </Box>
        <Text
          textAlign="left"
          fontSize={2}
          fontWeight="200"
          lineHeight="1.3"
          width="80%"
          margin="auto"
        >
          The Challenge Cards are an innovative career development tool that
          academic advisors, guidance counsellors and teachers use to prepare
          students for the future of work.
        </Text>
        <Text
          textAlign="left"
          fontSize={2}
          fontWeight="500"
          lineHeight="1.3"
          width="80%"
          margin="auto"
          paddingTop="3rem"
        >
          The Shift
        </Text>
        <Text
          textAlign="left"
          fontSize={2}
          fontWeight="200"
          lineHeight="1.3"
          width="80%"
          margin="auto"
        >
          Economic, technological, and societal changes are making the concept
          of job titles obsolete. To prepare young people for the new world of
          work, academic advisors, parents, teachers and guidance counsellors
          need to move away from considering only the traditional list of jobs
          and careers, and direct their attention to the{' '}
          <Link
            href="http://www.bbc.com/capital/story/20170424-the-next-generation-of-jobs-wont-be-made-up-of-professions"
            color="white"
            visitedColor="white"
            textDecoration="underline"
          >
            challenges, problems and opportunities that exist in the world.
          </Link>{' '}
          Enabling this shift will allow students to approach the new world of
          work in a more effective way.
        </Text>
        <Text
          textAlign="left"
          fontSize={2}
          fontWeight="500"
          lineHeight="1.3"
          width="80%"
          margin="auto"
          paddingTop="3rem"
        >
          What is the Challenge mindset?
        </Text>
        <Text
          textAlign="left"
          fontSize={2}
          fontWeight="200"
          lineHeight="1.3"
          width="80%"
          margin="auto"
        >
          One approach that moves us away from focusing on jobs is the Challenge
          mindset. This approach helps youth see the bigger picture: the
          challenges, problems and opportunities that exist in society and the
          world of work. While jobs and careers are likely to change, the
          challenges we are trying to solve will remain. In fact, as our
          perspective on certain issues evolves, new challenges to tackle will
          emerge as well. Examples of the most important challenges we will
          continue to face in the future include: redesigning the health care
          system, collecting and using big data, and managing the planet’s
          waste. These opportunities have the potential to create meaningful
          work for youth. When students identify and understand these
          challenges, they will open up their world and prepare to make a
          significant contribution to the workplace.
        </Text>
        <Text
          textAlign="left"
          fontSize={2}
          fontWeight="500"
          lineHeight="1.3"
          width="80%"
          margin="auto"
          paddingTop="3rem"
        >
          Challenge Cards
        </Text>
        <Text
          textAlign="left"
          fontSize={2}
          fontWeight="200"
          lineHeight="1.3"
          width="80%"
          margin="auto"
        >
          How can we help other young people focus on challenges? Colleges all
          over North America are using the{' '}
          <Link
            href="https://youtu.be/ZEnOTo6n0js"
            color="white"
            visitedColor="white"
            textDecoration="underline"
          >
            Challenge Cards.
          </Link>{' '}
          This deck of 30 cards covers challenges in the future of work in the
          areas of health, technology, society, environment and the economy. The
          Challenge Cards were presented at the{' '}
          <Link
            href="https://youtu.be/rXmsoY3Geb0"
            color="white"
            visitedColor="white"
            textDecoration="underline"
          >
            Career Pro Conference 2016
          </Link>
          , at{' '}
          <Link
            href="https://youtu.be/AfmDOzYyP80"
            color="white"
            visitedColor="white"
            textDecoration="underline"
          >
            Disrupt HR Ottawa 2016
          </Link>{' '}
          and at{' '}
          <Link
            href="http://cannexus.ca/2016/09/the-challenge-method/"
            color="white"
            visitedColor="white"
            textDecoration="underline"
          >
            Cannexus 2017.
          </Link>{' '}
          You can also see the Challenge Cards being used on TV Rogers on the
          francophone show{' '}
          <Link
            href="https://youtu.be/91C0xdsuF7A?t=15m26s"
            color="white"
            visitedColor="white"
            textDecoration="underline"
          >
            Ta carrière, ton histoire
          </Link>{' '}
          or{' '}
          <Link
            href="http://www.cbc.ca/news/canada/ottawa/programs/ottawamorning/new-student-career-coaching-1.4135708"
            color="white"
            visitedColor="white"
            textDecoration="underline"
          >
            CBC Radio.
          </Link>
        </Text>
        <Text
          textAlign="center"
          fontSize={3}
          fontWeight="500"
          lineHeight="1.3"
          width="80%"
          margin="auto"
          paddingTop="3rem"
        >
          Want to learn more about how you can use the Challenge Cards at your
          school?
        </Text>
        <Text
          textAlign="center"
          fontSize={3}
          fontWeight="500"
          lineHeight="1.3"
          width="80%"
          margin="auto"
          paddingTop="3rem"
        >
          Enter your information to receive a free information package.
        </Text>
        <Box flexDirection="column" alignItems="center" flex="1">
          <Form
            enableIcons={false}
            title={''}
            labels={['firstName', 'email', 'school', 'phone']}
            // raiseSubmit={form => registerSchool(setUser, form, navigate, lang)}
            buttonLabel={'I agree'}
          />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default SchoolRegister

import React from 'react'
import { useLanguage, useTop3, useUser } from '../state'
import { Box, Text, Navbar, Link } from '../components'
import strings from '../strings'
import styled from 'styled-components'
import { theme } from '../components/theme'
import Firebase from 'firebase'

const database = Firebase.database()

const StyledButton = styled.button`
  background: ${props => props.backgroundColor || 'white'};
  border-radius: 10px;
  align-self: center;
  padding: 1rem 4rem;
  margin-top: 4rem;
  color: ${props => props.inputColor || theme.colors.black};
`

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

const handleSave = async ({ uid: userId, licenseCode }, myTop3) => {
  console.log(userId)
  await new Promise((res, rej) => {
    database.ref(`${licenseCode}/users/${userId}`).update({
      myTop3: myTop3,
    })
    console.log('Successfully added to database')
    res('Successfully added to database')
    rej('Failed to add to database')
  })
}
const handleDownload = async ({ licenseCode }, lang) => {
  // Retrieve student information
  const students = await new Promise((res, rej) => {
    database
      .ref(`${licenseCode}/users`)
      .on('value', snapshot => res(snapshot.val()))
  })

  // Filter names and top 3 challenge cards
  let studentCards = []
  for (const id in students) {
    if (id === 'set') continue
    const { displayName, email, myTop3 } = students[id]
    const topChallenges = myTop3 ? myTop3.map(card => card[lang].title) : []
    studentCards.push([displayName, email, ...topChallenges])
  }

  // Prepare CSV
  let resultsCsv = 'data:text/csv;charset=utf-8,'
  resultsCsv += 'Name,Email,Challenge 1,Challenge 2, Challenge 3\r\n'
  studentCards.forEach(studentInfo => {
    resultsCsv += studentInfo.join(',') + '\r\n'
  })

  // Download CSV
  var downloadLink = document.createElement('a')
  downloadLink.href = resultsCsv
  downloadLink.download = 'results.csv'

  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}
const renderUserScreen = (lang, user, myTop3) => {
  return (
    <React.Fragment>
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
          {user.myTop3 && user.myTop3.length > 0
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
          {user.myTop3 && user.myTop3.length > 0
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
    </React.Fragment>
  )
}

const renderAdminScreen = (lang, user) => {
  return (
    <Box flexDirection="column" alignItems="center" mx={6}>
      <Text
        textAlign="center"
        fontSize={5}
        fontWeight="600"
        lineHeight="1.3"
        maxWidth="50rem"
      >
        {`${strings.welcome[lang]} ${user.displayName}`}!
      </Text>
      <Text
        textAlign="center"
        fontSize={5}
        fontWeight="600"
        lineHeight="1.3"
        maxWidth="50rem"
      >
        {`${strings.licenseCode[lang]} ${user.licenseCode}`}!
      </Text>
      <Box py="5rem" flexDirection="column" px="5rem" alignItems="center">
        <StyledButton onClick={() => handleDownload(user, lang)}>
          {strings.studentInfo[lang]}
        </StyledButton>
      </Box>
    </Box>
  )
}
const Home = () => {
  const { top3: myTop3 } = useTop3()
  const { lang } = useLanguage()
  const { user } = useUser()

  console.log(user)
  return (
    <Box bg="purple" flexDirection="column" color="white" flex="1">
      <Navbar bg="purple" />
      {user.admin
        ? renderAdminScreen(lang, user)
        : renderUserScreen(lang, user, myTop3)}
    </Box>
  )
}

export default Home

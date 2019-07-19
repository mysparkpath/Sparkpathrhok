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

const Home = () => {
  const { top3: myTop3 } = useTop3()
  const { lang } = useLanguage()
  const { user } = useUser()
  console.log(user)
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
}

export default Home

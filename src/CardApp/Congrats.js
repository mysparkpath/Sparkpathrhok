import React, { useContext } from 'react'
import { Button, Box, Text } from '../components'
import { DeckContext } from '../App'
import { navigate } from '@reach/router'
import strings from '../strings'
import { useLanguage } from '../state'

const buttonProps = {
  bg: 'white',
  borderRadius: '5rem',
  alignSelf: 'center',
  p: '2.4rem 5.5rem',
  mt: '4rem',
  boxShadow: '0px 7px 12px -8px rgba(0, 0, 0, 0.75)',
}

const Congrats = ({ yesGroup }) => {
  const { redoChallenge } = useContext(DeckContext)
  const { lang } = useLanguage()

  const needsRedo = yesGroup.length > 10

  let handleClick = () => {
    if (needsRedo) {
      redoChallenge()
    } else {
      redoChallenge()
      navigate('/top3')
    }
    console.log('handle me on success!')
  }

  let info = strings.narrowDown[lang]

  if (needsRedo) {
    info = strings.narrowDownMore[lang]
  }

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      bg="rgb(113, 69, 154)"
      flexDirection="column"
      color="white"
      px="4rem"
      minHeight="100vh"
      flex="1"
    >
      {!needsRedo && (
        <Text as="h2" fontWeight="600" fontSize="4rem">
          {strings.niceJob[lang]}{' '}
          <span role="img" aria-label="star emoji">
            ⭐️
          </span>
        </Text>
      )}
      <Text maxWidth="32rem" mt="4rem" fontSize="2.6rem" lineHeight="1.2">
        {info}
      </Text>

      <Button {...buttonProps} onClick={handleClick}>
        <Text
          color="rgb(113, 69, 154)"
          fontSize="2rem"
          fontWeight="600"
          textTransform="uppercase"
        >
          {strings.doItExtreme[lang]}
        </Text>
      </Button>
    </Box>
  )
}

export default Congrats

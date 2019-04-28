import React, { useContext } from 'react'
import { Button, Box, Text } from '../components'
import { DeckContext } from '../App'

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

  const needsRedo = yesGroup.length > 10

  let handleClick = () => {
    if (needsRedo) {
      redoChallenge()
    } else {
      redoChallenge()
      setShowTop3(true)
    }
    console.log('handle me on success!')
  }

  let info = `Now let’s narrow down to find out the ones that interest you most.`

  if (needsRedo) {
    info = `Let's narrow this down a bit further!`
  }

  const { setShowTop3 } = useContext(DeckContext)

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      bg="rgb(113, 69, 154)"
      flexDirection="column"
      color="white"
      px="4rem"
      height="100vh"
    >
      {!needsRedo && (
        <Text as="h2" fontWeight="600" fontSize="4rem">
          Nice job!{' '}
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
          Let's do it!
        </Text>
      </Button>
    </Box>
  )
}

export default Congrats

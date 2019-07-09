import React, { useEffect } from 'react'
import { Box, Text } from '../components'
import styled from 'styled-components'
import { confetti } from 'dom-confetti'
import { useLanguage, useTop3 } from '../state'

const paraProps = {
  mt: '2.2rem',
  fontSize: '2.2rem',
  fontWeight: '300',
}

const StyledButton = styled.a`
  background: white;
  border-radius: 50px;
  align-self: center;
  padding: 2.4rem 4.6rem;
  margin-top: 4rem;
  box-shadow: 0px 7px 12px -8px rgba(0, 0, 0, 0.75);
`

const WellDone = () => {
  const { top3 } = useTop3()
  const { lang } = useLanguage

  useEffect(() => {
    confetti(document.getElementById('confetti-target'), {
      spread: '100',
    })
  }, [])

  return (
    <Box
      alignItems="center"
      bg="rgb(113, 69, 154)"
      flexDirection="column"
      color="white"
      py="4rem"
      minHeight="100vh"
      flex="1"
    >
      <Box
        bg="white"
        mt="-4rem"
        pb="5rem"
        pt="8rem"
        width="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          color="rgb(113,69,154)"
          lineHeight="1.2"
          mb="2rem"
          fontSize="2.6rem"
          fontWeight="600"
        >
          Yay! You made it!{' '}
          <span role="img" aria-label="celebrate emoji">
            🎉
          </span>
        </Text>

        <Box
          mt="2rem"
          flexDirection="column"
          alignItems="flex-start"
          color="black"
          px="3rem"
        >
          {top3.length > 0 &&
            top3.map(({ image_path, altText, variant, en, fr, key }) => {
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
                    color="rgb(114, 114, 114)"
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

      <Box py="5rem" flexDirection="column" px="5rem">
        <Text {...paraProps}>
          The next step is to find out what education program can help you work
          on these important challenges.
        </Text>

        <Text mt="4rem" fontSize="2rem" fontWeight="600">
          Enroll in SparkPath to get started.
        </Text>

        <StyledButton href="https://mysparkpath.com/">
          <Text
            fontSize="2rem"
            fontWeight="600"
            textTransform="uppercase"
            id="confetti-target"
          >
            Let's Do It!
          </Text>
        </StyledButton>

        <Text
          as="a"
          color="white"
          href={'http://tiny.cc/challengecards'}
          mt="4rem"
          fontSize="1.5rem"
          textDecoration="underline"
        >
          Give your feedback
        </Text>
      </Box>
    </Box>
  )
}

export default WellDone

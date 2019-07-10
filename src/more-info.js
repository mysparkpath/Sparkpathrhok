import React from 'react'
import { Button, Text, Box, Image } from './components'
import { ReactComponent as Arrow } from './static/icons/backButton.svg'
// import { ReactComponent as Heart } from './static/icons/heart.svg'
import styled from 'styled-components'

const BackArrow = styled(Arrow)`
  height: 2rem;
`

// const HeartIcon = styled(Heart)`
//   height: 2rem;
//   width: 2rem;
// `

const MoreInfo = ({ info, lang, closeModal, imagePath, handleLike }) => {
  const { variant, alt } = info
  const { title, blurb_1, careers, blurb_2 } = info[lang]

  return (
    <Box flexDirection="column" width={1} alignItems="center">
      <Box
        bg={variant}
        justifyContent="space-between"
        px={[2, 6]}
        py={7}
        width={1}
        color="white"
      >
        <Button p={3} color="white" onClick={closeModal}>
          <BackArrow />
        </Button>
        <Text as="h1" fontSize={[3, 4]}>
          {title}
        </Text>
        <Box />
        {/* <Button color="white" onClick={handleLike}>
          <HeartIcon />
        </Button> */}
      </Box>

      <Box
        flexDirection="column"
        alignItems="center"
        maxWidth="75rem"
        px={[5, 6]}
        py={[6, 8]}
      >
        <Box
          bg={variant}
          width="25rem"
          height="25rem"
          justifyContent="center"
          alignItems="center"
          mb={[6, 8]}
          borderRadius={1}
        >
          <Image width="20rem" height="20rem" src={imagePath} alt={alt} />
        </Box>

        <Text lineHeight="1.5" textAlign="left">
          {blurb_1}
        </Text>

        <Box my={[6, 8]} flexDirection="column" maxWidth="70rem">
          <Text as="h2" fontSize={3}>
            Careers
          </Text>

          <Box mt={[6, 8]} as="ul" flexWrap="wrap" justifyContent="center">
            {careers.map((career, idx) => (
              <Text
                py={2}
                textAlign="left"
                as="li"
                width={[1 / 2, 1 / 3]}
                key={idx}
                lineHeight="1.5"
                style={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                }}
              >
                {career}
              </Text>
            ))}
          </Box>
        </Box>

        <Text lineHeight="1.5" textAlign="left">
          {blurb_2}
        </Text>
      </Box>
    </Box>
  )
}

export default MoreInfo

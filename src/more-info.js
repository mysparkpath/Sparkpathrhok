import React from 'react'
import { Button, Text, Box, Image } from './components'

const MoreInfo = ({ info, lang, closeModal }) => {
  console.log({ info, lang })
  const { image_path, variant, alt } = info
  const { title, blurb_1, careers, blurb_2 } = info[lang]

  return (
    <Box flexDirection="column">
      <Box bg={variant}>
        <Button onClick={closeModal}>Back arrow</Button>
        <Text as="h1">{title}</Text>
        <Button>Like</Button>
      </Box>

      <Box>
        {/* <Image src={image_path} alt={alt} /> */}

        <Text>{blurb_1}</Text>

        <Text as="h4">Careers</Text>

        <Text>{careers}</Text>

        <Text>{blurb_2}</Text>
      </Box>
    </Box>
  )
}

export default MoreInfo

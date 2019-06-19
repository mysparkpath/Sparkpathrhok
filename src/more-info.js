import React from 'react'
import { Button, Text, Box, Image } from './components'

const MoreInfo = ({ info, lang }) => {
  const { image_path, variant, alt } = info
  const { title, blurb_1, careers, blurb_2 } = info[lang]

  return (
    <div>
      {
        // Navbar with back + like (and like count)
        // circular image of image
        // blurb 1
        //careers header
        // careers list
        // blurb 2
      }
      <Box bg={variant}>
        <Button>Back arrow</Button>
        <Text as="h1">{title}</Text>
        <Button>Like</Button>
      </Box>

      <Box>
        <Image src={image_path} alt={alt} />

        <Text>{blurb_1}</Text>

        <Text as="h4">Careers</Text>

        <Text>{careers}</Text>

        <Text>{blurb_2}</Text>
      </Box>
    </div>
  )
}

export default MoreInfo

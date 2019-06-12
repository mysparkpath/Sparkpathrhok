import React from 'react'
import Box from './box'
import Text from './text'
import Button from './button'
import { ReactComponent as SparkLogo } from '../static/icons/spark-logo-white.svg'
import styled from 'styled-components'
import { useLanguage } from '../state'

const MainLogo = styled(SparkLogo)`
  width: 15rem;
`

const Navbar = props => {
  const { setLang, lang } = useLanguage()

  console.log({ lang })

  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      height="5rem"
      bg="white"
      px={4}
      py={8}
      mb={6}
      {...props}
    >
      <MainLogo />
      <Box>
        <Text as="span">About</Text> / <Button>EN-FR</Button>
      </Box>
    </Box>
  )
}

export default Navbar

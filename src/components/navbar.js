import React from 'react'
import Box from './box'
import Link from './link'
import Button from './button'
import Text from './text'
import { ReactComponent as SparkLogo } from '../static/icons/spark-logo-white.svg'
import { ReactComponent as SparkLogoPurple } from '../static/icons/spark-logo-purple.svg'
import { Link as ReachLink } from '@reach/router'
import styled from 'styled-components'
import { useLanguage } from '../state'
import strings from '../strings'

const MainLogo = styled(SparkLogo)`
  width: 15rem;
`

const PurpleLogo = styled(SparkLogoPurple)`
  width: 15rem;
`

const Navbar = props => {
  console.log(props.location)
  const { toggleLang, lang } = useLanguage()

  const isEnglish = lang === 'en'

  const textColours = props.light ? 'black' : 'white'

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
      {props.light ? <PurpleLogo /> : <MainLogo />}
      <Box alignItems="center">
        <Link
          fontSize={1}
          href="https://mysparkpath.com/pages/about"
          newTab
          mr={3}
          hoverColor={textColours}
          color={textColours}
          visitedColor={textColours}
        >
          {strings.about[lang]}
        </Link>{' '}
        /{' '}
        <Link
          as={ReachLink}
          fontSize={1}
          to="/login"
          mr={3}
          hoverColor={textColours}
          color={textColours}
          visitedColor={textColours}
          fontWeight={window.location.pathname === '/login' ? 600 : 300}
          style={{ 'margin-left': '0.8rem' }}
        >
          {strings.login[lang]}
        </Link>{' '}
        /{' '}
        <Button
          fontSize={1}
          lineHeight="1.2"
          ml={3}
          onClick={() => toggleLang()}
          color={textColours}
        >
          <Text as="span" fontWeight={isEnglish ? '600' : '300'}>
            EN
          </Text>
          -
          <Text as="span" fontWeight={!isEnglish ? '600' : '300'}>
            FR
          </Text>
        </Button>
      </Box>
    </Box>
  )
}

export default Navbar

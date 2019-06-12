import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { variant } from 'styled-system'
import Text from './text'
import { Link as ReachLink } from '@reach/router'

const linkStyles = variant({ key: 'links' })

const StyledLink = styled(Text)`
  ${linkStyles}
`

const Link = ({ newTab, ...props }) => {
  let tabProps = {}

  if (newTab) {
    tabProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return <StyledLink as={ReachLink} {...props} {...tabProps} />
}

Link.propTypes = {
  display: PropTypes.string,
  newTab: PropTypes.bool,
  m: PropTypes.number,
}

Link.defaultProps = {
  display: 'inline-block',
  m: 0,
  newTab: false,
}

export default Link

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { variant, boxShadow } from 'styled-system'
import Text from './text'

const linkStyles = variant({ key: 'links' })

const StyledLink = styled(Text)`
  ${linkStyles}
  ${boxShadow}
`

const Link = ({ newTab, ...props }) => {
  let tabProps = {}

  if (newTab) {
    tabProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return <StyledLink {...props} {...tabProps} />
}

Link.propTypes = {
  display: PropTypes.string,
  newTab: PropTypes.bool,
  m: PropTypes.number,
}

Link.defaultProps = {
  as: 'a',
  display: 'inline-block',
  m: 0,
  newTab: false,
}

export default Link

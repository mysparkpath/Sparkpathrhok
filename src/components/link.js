import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { variant, shadow, typography, space } from 'styled-system'
import Text from './text'

const linkStyles = variant({ key: 'links' })

const visitedStyles = ({ visitedColor = 'black', theme, ...rest }, ...args) => {
  const { colors } = theme

  const textColor = colors[visitedColor] ? colors[visitedColor] : visitedColor

  return `color: ${textColor};`
}

const hoverStyles = ({ hoverColor = 'black', theme }) => {
  const { colors } = theme

  const textColor = colors[hoverColor] ? colors[hoverColor] : hoverColor

  return `color: ${textColor};`
}

const StyledLink = styled(Text)`
  ${linkStyles}
  ${shadow}
  ${typography}
  ${space}

  &:visited {
    ${visitedStyles}
  }

  &:hover {
    ${hoverStyles}
  }
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
  newTab: false,
}

export default Link

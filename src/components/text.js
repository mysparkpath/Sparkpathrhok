import styled from 'styled-components'
import {
  color,
  borders,
  display,
  alignItems,
  maxWidth,
  space,
  typography,
  width,
  style,
} from 'styled-system'

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
})

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

const Text = styled.div`
  ${color}
  ${borders}
  ${alignItems}
  ${display}
  ${typography}
  ${maxWidth}
  ${space}
  ${textTransform}
  ${textDecoration}
  ${width}
`

export default Text

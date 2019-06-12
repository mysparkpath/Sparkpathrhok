import styled from 'styled-components'
import {
  color,
  borders,
  display,
  alignItems,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  maxWidth,
  lineHeight,
  space,
  textAlign,
  textStyle,
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
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${maxWidth}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${textStyle}
  ${textTransform}
  ${textDecoration}
  ${width}
`

Text.defaultProps = {
  m: 0,
  p: 0,
}

export default Text

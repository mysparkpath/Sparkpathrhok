import {
  alignItems,
  alignSelf,
  borders,
  boxShadow,
  color,
  display,
  flex,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  order,
  position,
  space,
  width,
  zIndex,
} from 'styled-system'
import styled from 'styled-components'

const Box = styled.div`
  ${alignItems}
  ${alignSelf}
  ${borders}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${maxHeight}
  ${minHeight}
  ${minWidth}
  ${maxWidth}
  ${position}
  ${order}
  ${space}
  ${width}
  ${zIndex}
`

Box.defaultProps = {
  display: 'flex',
}

export default Box

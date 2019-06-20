import {
  alignItems,
  alignSelf,
  borders,
  boxShadow,
  borderRadius,
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
  top,
  left,
  order,
  position,
  space,
  overflow,
  width,
  zIndex,
} from 'styled-system'
import styled from 'styled-components'

const Box = styled.div`
  ${alignItems}
  ${alignSelf}
  ${borderRadius}
  ${borders}
  ${boxShadow}
  ${top}
  ${left}
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
  ${overflow}
  ${width}
  ${zIndex}
`

Box.defaultProps = {
  display: 'flex',
}

export default Box

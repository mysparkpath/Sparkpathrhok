import React from 'react'
import styled from 'styled-components/macro'

const StyledCardButton = styled.button`
  border: none;
  background: none;
`
const CardButton = ({ id, children, onClick, title }) => {
  return (
    <StyledCardButton id={id} onClick={onClick} type="button">
      {children}
    </StyledCardButton>
  )
}

export default CardButton

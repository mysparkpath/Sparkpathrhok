import React from 'react'
import styled from 'styled-components/macro'

import { useDeck } from '../state'
import { ReactComponent as Undo } from '../static/icons/undo.svg'

const UndoIcon = styled(Undo)`
  height: 3rem;
  margin-bottom: 0.5rem;
`

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: none;
  margin-right: 1rem;
  position: absolute;
  margin-left: 15rem;
`

const UndoButton = () => {
  const { history, undo } = useDeck()

  if (!history) return null

  const handleUndoClick = e => {
    e.preventDefault()
    undo()
  }
  return (
    <ButtonWrapper id="Undo" onClick={handleUndoClick} type="button">
      <UndoIcon />
      Undo
    </ButtonWrapper>
  )
}

export default UndoButton

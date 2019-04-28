import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { DeckContext } from './CardApp'

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
`

const UndoButton = () => {
  const { goToPreviousDeckState, deckHistory } = useContext(DeckContext)

  if (!deckHistory) return null

  const handleUndoClick = e => {
    e.preventDefault()
    goToPreviousDeckState()
  }
  return (
    <ButtonWrapper id="Undo" onClick={handleUndoClick} type="button">
      <UndoIcon />
      Undo
    </ButtonWrapper>
  )
}

export default UndoButton

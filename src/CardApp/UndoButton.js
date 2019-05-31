import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { DeckContext } from '../App'

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

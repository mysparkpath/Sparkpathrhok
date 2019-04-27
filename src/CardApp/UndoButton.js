import React, { useContext } from 'react'
import { DeckContext } from './CardApp'

const UndoButton = () => {
  const { goToPreviousDeckState } = useContext(DeckContext)

  const handleUndoClick = e => {
    e.preventDefault()
    goToPreviousDeckState()
  }
  return (
    <button id="Undo" onClick={handleUndoClick} type="button">
      Undo!
    </button>
  )
}

export default UndoButton

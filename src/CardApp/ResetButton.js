import React, { useContext } from 'react'
import { DeckContext } from '../App'
const ResetButton = () => {
  const { reset } = useContext(DeckContext)
  const handleResetClick = e => {
    e.preventDefault()
    reset()
  }
  return (
    <button id="reset-cards" type="button" onClick={handleResetClick}>
      I want to start over!
    </button>
  )
}

export default ResetButton

import React from 'react'
import { useDeck } from '../state'

const ResetButton = () => {
  const { reset } = useDeck()
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

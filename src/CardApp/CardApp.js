import React, { useState } from 'react'

import { initialDeckState } from './state'
import CardDeck from './CardDeck'
// import ResetButton from './ResetButton'

export const DeckContext = React.createContext({})

const CardApp = () => {
  const [deckState, setDeckState] = useState(initialDeckState)
  const [deckHistory, setDeckHistory] = useState()

  const goToPreviousDeckState = () => {
    console.log('UNDO!', deckHistory)
    if (deckHistory) {
      setDeckState(deckHistory)
      setDeckHistory()
      console.log(deckState)
    }
  }

  const reset = () => {
    setDeckState(initialDeckState)
  }

  const redoChallenge = yesIds => {
    const redoCards = yesIds.map(id =>
      initialDeckState.initial.find(c => c.key === id)
    )

    const newState = {
      initial: redoCards,
      no: [],
      maybe: [],
      yes: [],
      totalCount: redoCards.length,
    }

    setDeckState(newState)
    setDeckHistory()
  }

  const sendToNo = ({ key }) => {
    const { initial, no } = deckState
    console.log('send to no', key)
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== key),
      no: [...no, key],
    }

    setDeckHistory(deckState)
    setDeckState(newDeckState)
  }

  const sendToMaybe = ({ key }) => {
    const { initial, maybe } = deckState
    console.log('send to maybe', key)
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== key),
      maybe: [...maybe, key],
    }
    setDeckHistory(deckState)
    setDeckState(newDeckState)
  }

  const sendToYes = ({ key }) => {
    const { initial, yes } = deckState
    console.log('send to yes', key)
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== key),
      yes: [...yes, key],
    }
    setDeckHistory(deckState)
    setDeckState(newDeckState)
  }

  return (
    <DeckContext.Provider
      value={{
        deckHistory,
        deckState,
        goToPreviousDeckState,
        redoChallenge,
        reset,
        sendToMaybe,
        sendToNo,
        sendToYes,
      }}
    >
      <div className="CardApp">
        {/* <ResetButton /> */}
        <CardDeck />
      </div>
    </DeckContext.Provider>
  )
}

export default CardApp

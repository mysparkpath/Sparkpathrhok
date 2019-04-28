import React, { useState } from 'react'

import { initialDeckState } from './state'
import CardDeck from './CardDeck'
// import ResetButton from './ResetButton'

export const DeckContext = React.createContext({})

const CardApp = () => {
  const [deckState, setDeckState] = useState(initialDeckState)
  const [deckHistory, setDeckHistory] = useState()
  const [showTop3, setShowTop3] = useState(false)
  const [totalCount, setTotalCount] = useState(deckState.initial.length)
  const [myTop3, setMyTop3] = useState([])

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

  const redoChallenge = () => {
    // const redoCards = yesIds.map(id =>
    //   initialDeckState.initial.find(c => c.key === id)
    // )

    const newState = {
      initial: deckState.yes,
      no: [],
      maybe: [],
      yes: [],
    }
    setTotalCount(deckState.yes.length)
    setDeckState(newState)
    setDeckHistory()
  }

  const sendToNo = card => {
    const { initial, no } = deckState
    console.log('send to no', card.key)
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== card.key),
      no: [...no, card],
    }

    setDeckHistory(deckState)
    setDeckState(newDeckState)
  }

  const sendToMaybe = card => {
    const { initial, maybe } = deckState
    console.log('send to maybe', card.key)
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== card.key),
      maybe: [...maybe, card],
    }
    setDeckHistory(deckState)
    setDeckState(newDeckState)
  }

  const sendToYes = card => {
    const { initial, yes } = deckState
    console.log('send to yes', card.key)
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== card.key),
      yes: [...yes, card],
    }
    setDeckHistory(deckState)
    setDeckState(newDeckState)
  }

  return (
    <DeckContext.Provider
      value={{
        deckHistory,
        deckState,
        setDeckState,
        goToPreviousDeckState,
        redoChallenge,
        reset,
        sendToMaybe,
        showTop3,
        setShowTop3,
        sendToNo,
        sendToYes,
        totalCount,
        setTotalCount,
        myTop3,
        setMyTop3,
      }}
    >
      <div className="CardApp">
        {/* <ResetButton /> */}
        <CardDeck showTop3={showTop3} />
      </div>
    </DeckContext.Provider>
  )
}

export default CardApp

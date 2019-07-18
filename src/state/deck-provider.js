import React, { useContext, useState } from 'react'
import initialDeck from '../static/spark_paths'

const DeckContext = React.createContext()

export const initialDeckState = {
  initial: initialDeck.paths, // initialDeck.paths.sort(() => -1),
  no: [],
  maybe: [],
  yes: [],
  totalCount: initialDeck.paths.length,
}

function DeckProvider(props) {
  const [history, setHistory] = useState()
  const [deck, setDeck] = useState(initialDeckState)
  const [totalCount, setTotalCount] = useState(initialDeckState.totalCount)

  const undo = () => {
    if (history) {
      setDeck(history)
      setHistory()
    }
  }

  const redoChallenge = () => {
    const newState = {
      initial: deck.yes,
      no: [],
      maybe: [],
      yes: [],
    }
    setTotalCount(deck.yes.length)
    setDeck(newState)
    setHistory()
  }

  const reset = () => {
    setDeck(initialDeckState)
  }

  const sendToNo = card => {
    const { initial, no } = deck
    const newDeck = {
      ...deck,
      initial: initial.filter(c => c.key !== card.key),
      no: [...no, card],
    }

    setHistory(deck)
    setDeck(newDeck)
  }

  const sendToMaybe = card => {
    const { initial, maybe } = deck
    const newDeck = {
      ...deck,
      initial: initial.filter(c => c.key !== card.key),
      maybe: [...maybe, card],
    }
    setHistory(deck)
    setDeck(newDeck)
  }

  const sendToYes = card => {
    const { initial, yes } = deck
    const newDeck = {
      ...deck,
      initial: initial.filter(c => c.key !== card.key),
      yes: [...yes, card],
    }
    setHistory(deck)
    setDeck(newDeck)
  }

  const value = {
    deck,
    setDeck,
    history,
    setHistory,
    undo,
    sendToNo,
    sendToMaybe,
    sendToYes,
    redoChallenge,
    reset,
    totalCount,
  }

  return <DeckContext.Provider value={value} {...props} />
}

function useDeck() {
  const context = useContext(DeckContext)

  if (!context) {
    throw new Error('useDeck must be used within a DeckProvider')
  }

  return context
}

export { DeckProvider, useDeck }

import React, { useState } from 'react'
import { initialDeckState } from './CardApp/state'
import { GlobalStyle } from './styles'
import './App.css'
import { Router } from '@reach/router'
import Layout from './Layout'
import Main from './Main'
import CardApp from './CardApp'
import WellDone from './CardApp/WellDone'

export const DeckContext = React.createContext({})

const App = () => {
  const [language, setLanguage] = useState('en')
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

  const rotateDeck = direction => {
    const deck = deckState.initial

    let initial

    if (direction === 'left') {
      const popped = deck.pop()
      initial = [popped, ...deck]
    } else if (direction === 'right') {
      const shifted = deck.shift()
      initial = [...deck, shifted]
    }

    setDeckState({ ...deckState, initial })
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
        rotateDeck,
        sendToMaybe,
        sendToNo,
        sendToYes,
        setShowTop3,
        setTotalCount,
        showTop3,
        totalCount,
        myTop3,
        setMyTop3,
        language,
        setLanguage,
      }}
    >
      <Layout>
        <GlobalStyle />
        <Router>
          <Main path="/" />
          <CardApp path="/cards" />
          <WellDone path="/welldone" />
        </Router>
      </Layout>
    </DeckContext.Provider>
  )
}

export default App

import React, { useState } from "react";
// import logo from "./logo.svg";
import './App.css'

import { initialDeckState } from "./state";
import CardDeck from "./CardDeck";

export const DeckContext = React.createContext({});

const App = () => {
  const [deckState, setDeckState] = useState(initialDeckState);
  const [deckHistory, setDeckHistory] = useState();

  const goToPreviousDeckState = () => {
    console.log("UNDO!", deckHistory);
    if (deckHistory) {
      setDeckState(deckHistory);
      console.log(deckState);
    }
  };

  const sendToNo = ({ key }) => {
    const { initial, no } = deckState;
    console.log("send to no", key);
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== key),
      no: [...no, key]
    };

    setDeckHistory(deckState);
    setDeckState(newDeckState);
  };

  const sendToMaybe = ({ key }) => {
    const { initial, maybe } = deckState;
    console.log("send to maybe", key);
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== key),
      maybe: [...maybe, key]
    };
    setDeckHistory(deckState);
    setDeckState(newDeckState);
  };

  const sendToYes = ({ key }) => {
    const { initial, yes } = deckState;
    console.log("send to yes", key);
    const newDeckState = {
      ...deckState,
      initial: initial.filter(c => c.key !== key),
      yes: [...yes, key]
    };
    setDeckHistory(deckState);
    setDeckState(newDeckState);
  };

  return (
    <DeckContext.Provider
      value={{
        deckState,
        sendToNo,
        sendToMaybe,
        sendToYes,
        goToPreviousDeckState
      }}
    >
      <div className="App">
        <header className="App-header">
          <h1>SparkPath</h1>
        </header>
        <div>
          <CardDeck />
        </div>
      </div>
    </DeckContext.Provider>
};

export default App

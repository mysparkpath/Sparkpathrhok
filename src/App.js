import React from 'react'
import cardList from './card-list'
// import logo from "./logo.svg";
import './App.css'
import Card from './components/card'

console.log(cardList[0])
const cardTest = cardList.paths[0]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SparkPath</h1>
        <Card cardTest={cardTest} />
      </header>
    </div>
  )
}

export default App

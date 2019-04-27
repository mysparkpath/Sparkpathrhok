import React from 'react'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SparkPath</h1>
      </header>
      <Card en={{ title: 'Protect society from crime', variant: 'pink' }} />
    </div>
  )
}

export default App

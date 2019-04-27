import React from 'react'
import './App.css'
import Card from './components/card'
import sparkPaths from './static/spark_paths'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SparkPath</h1>
      </header>
      {sparkPaths.paths.map(data => (
        <Card {...data} />
      ))}
    </div>
  )
}

export default App

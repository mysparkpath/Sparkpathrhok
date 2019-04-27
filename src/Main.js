import React from 'react'
import { Link } from '@reach/router'
const Main = () => {
  return (
    <div>
      <h1>Main Page!</h1>
      <Link to="/cards">Start the card game</Link>
    </div>
  )
}

export default Main

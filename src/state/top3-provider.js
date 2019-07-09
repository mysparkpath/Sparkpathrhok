import React, { useContext, useState } from 'react'
import initialDeck from '../static/spark_paths'

const Top3Context = React.createContext()

function Top3Provider(props) {
  const [top3, setTop3] = useState([])
  const [selector, setSelector] = useState(initialDeck.paths.sort(() => -1))

  const value = {
    top3,
    setTop3,
    selector,
    setSelector,
  }

  return <Top3Context.Provider value={value} {...props} />
}

function useTop3() {
  const context = useContext(Top3Context)

  if (!context) {
    throw new Error('useTop3 must be used within a Top3Provider')
  }

  return context
}

export { Top3Provider, useTop3 }

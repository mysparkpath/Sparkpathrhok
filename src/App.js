import React from 'react'
import { GlobalStyle } from './styles'
import './App.css'
import { Router } from '@reach/router'
import Layout from './Layout'
import Main from './Main'
import CardApp from './CardApp'
import WellDone from './CardApp/WellDone'

const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Router>
        <Main path="/" />
        <CardApp path="/cards" />
        <WellDone path="/welldone" />
      </Router>
    </Layout>
  )
}

export default App

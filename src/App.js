import React from 'react'
// import logo from "./logo.svg";
import './App.css'
import { Router } from '@reach/router'
import Layout from './Layout'
import Main from './Main'
import CardApp from './CardApp'

const App = () => {
  return (
    <Layout>
      <Router>
        <Main path="/" />
        <CardApp path="/cards" />
      </Router>
    </Layout>
  )
}

export default App

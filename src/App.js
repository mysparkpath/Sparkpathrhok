import React from 'react'
import { GlobalStyle } from './styles'
import './App.css'
import { Router } from '@reach/router'
import Layout from './Layout'
import Main from './Main'
import CardApp from './CardApp'
import CardSelector from './CardApp/CardSelector'
import WellDone from './CardApp/WellDone'
import GetStarted from './get-started'
import Instructions from './instructions'
import Login from './Login/Login'
import Register from './Register/Register'
import SchoolRegister from './SchoolRegister/SchoolRegister'
import Home from './Home/Home'
import { ThemeProvider } from 'styled-components'
import {
  LanguageProvider,
  DeckProvider,
  Top3Provider,
  UserProvider,
} from './state'
import { theme } from './components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <DeckProvider>
          <Top3Provider>
            <UserProvider>
              <Layout>
                <GlobalStyle />
                <Router style={{ flex: 1, display: 'flex' }}>
                  <Main path="/" />
                  <GetStarted path="/get-started" />
                  <Instructions path="/instructions" />

                  <CardApp path="/cards" />
                  <CardSelector path="/top3" />

                  <WellDone path="/welldone" />
                  <Login path="/login" />
                  <Register path="/register" />
                  <SchoolRegister path="/school-register" />
                  <Home path="/home" />
                </Router>
              </Layout>
            </UserProvider>
          </Top3Provider>
        </DeckProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

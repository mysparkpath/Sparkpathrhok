import React from 'react'
import { Box } from '../components'
import CardDeck from './CardDeck'
// import ResetButton from './ResetButton'

const CardApp = () => {
  return (
    <Box flex="1" justifyContent="center">
      {/* <ResetButton /> */}
      <CardDeck />
    </Box>
  )
}

export default CardApp

import React, { useContext } from 'react'
import { DeckContext } from './CardApp'

import CardButton from './CardButton'
import UndoButton from './UndoButton'

const CardDeck = () => {
  const {
    deckState: { initial: deck },
    sendToNo,
    sendToMaybe,
    sendToYes,
  } = useContext(DeckContext)
  const current = deck && deck.length > 0 ? deck[0] : null

  const handleCardButtonClick = (e, { callback }) => {
    e.preventDefault()
    callback(current)
  }
  console.log(current)
  return (
    <div>
      <h3>My Card Deck</h3>
      <div>{current && <div>{current.name}</div>}</div>
      <div>
        <CardButton
          onClick={e =>
            handleCardButtonClick(e, {
              callback: sendToNo,
            })
          }
          id="no-card"
          title="No"
        >
          No
        </CardButton>
        <CardButton
          onClick={e =>
            handleCardButtonClick(e, {
              callback: sendToMaybe,
            })
          }
          id="maybe-card"
          title="Maybe"
        >
          Maybe
        </CardButton>
        <CardButton
          onClick={e =>
            handleCardButtonClick(e, {
              callback: sendToYes,
            })
          }
          id="yes-card"
          title="Yes"
        >
          Yes
        </CardButton>
      </div>
      <div>
        <UndoButton />
      </div>
    </div>
  )
}

export default CardDeck

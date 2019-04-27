import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { DeckContext } from './CardApp'
import Card from '../components/card'
import CardButton from './CardButton'
import UndoButton from './UndoButton'
import initialDeck from '../static/spark_paths'

const CardDeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardProgress = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
  max-width: 50rem;
  height: 4rem;
`

const CardDeck = () => {
  const {
    deckState: { initial: deck },
    sendToNo,
    sendToMaybe,
    sendToYes,
  } = useContext(DeckContext)

  const totalCount = initialDeck.paths.length
  const currentIndex = totalCount - deck.length + 1

  const current = deck && deck.length > 0 ? deck[0] : null

  const handleCardButtonClick = (e, { callback }) => {
    e.preventDefault()
    callback(current)
  }
  console.log(current)
  return (
    <CardDeckWrapper>
      <CardProgress>{`${currentIndex}/${totalCount}`}</CardProgress>
      {/* <h3>My Card Deck</h3> */}

      <Card {...current} />
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
    </CardDeckWrapper>
  )
}

export default CardDeck

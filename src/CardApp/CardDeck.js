import React, { useContext } from 'react'
import styled, { css } from 'styled-components/macro'
import { DeckContext } from './CardApp'
import Card from '../components/card'
import CardButton from './CardButton'
import UndoButton from './UndoButton'
import initialDeck from '../static/spark_paths'

import { ReactComponent as Int } from '../static/icons/interested.svg'
import { ReactComponent as NotInt } from '../static/icons/not-interested.svg'
import { ReactComponent as VeryInt } from '../static/icons/very-interested.svg'

const iconStyles = css`
  height: 3rem;
  margin-right: 1.5rem;
`
const IntIcon = styled(Int)`
  ${iconStyles}
`

const NotIntIcon = styled(NotInt)`
  ${iconStyles}
`

const VeryIntIcon = styled(VeryInt)`
  ${iconStyles}
`

const CardDeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const CardStackWrapper = styled.div`
  position: relative;
  width: calc(100vw - 2rem);
  height: calc((100vw - 2rem) * 1.4);
  max-width: 30rem;
  max-height: 42rem;
  margin: 4rem 0;
`

const CardProgress = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
  max-width: 50rem;
  font-weight: 600;
  font-size: 1.8rem;
  height: 5rem;
  align-items: center;
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

  const current = deck && deck.length > 0 ? deck[deck.length - 1] : null

  const handleCardButtonClick = (e, { callback }) => {
    e.preventDefault()
    console.log(deck)
    callback(current)
  }
  return (
    <CardDeckWrapper>
      <CardProgress>{`${currentIndex} of ${totalCount}`}</CardProgress>
      {/* <h3>My Card Deck</h3> */}

      <CardStackWrapper>
        {deck.map((card, index) => (
          <Card rotate={index !== deck.length - 1} {...card} />
        ))}
      </CardStackWrapper>

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
          <NotIntIcon />
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
          <IntIcon />
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
          <VeryIntIcon />
        </CardButton>
      </div>
      <div>
        <UndoButton />
      </div>
    </CardDeckWrapper>
  )
}

export default CardDeck

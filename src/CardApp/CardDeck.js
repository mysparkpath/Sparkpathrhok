import React, { useContext } from 'react'
import styled, { css } from 'styled-components/macro'
import { darken } from 'polished'
import { DeckContext } from './CardApp'
import Card from '../components/card'
import CardButton from './CardButton'
import UndoButton from './UndoButton'
import Congrats from './Congrats'

import { ReactComponent as Int } from '../static/icons/interested.svg'
import { ReactComponent as NotInt } from '../static/icons/not-interested.svg'
import { ReactComponent as VeryInt } from '../static/icons/very-interested.svg'

const iconStyles = css`
  height: 6rem;
`
const IntIcon = styled(Int)`
  ${iconStyles}

  .st0 {
    fill: ${darken(0.15, '#9d70c7')};
  }
`

const NotIntIcon = styled(NotInt)`
  ${iconStyles}

  .st0 {
    fill: #9d70c7;
  }
`

const VeryIntIcon = styled(VeryInt)`
  ${iconStyles}
`

const CardDeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardStackWrapper = styled.div`
  position: relative;
  width: calc(100vw - 2rem);
  height: calc((100vw - 2rem) * 1.4);
  max-width: 30rem;
  max-height: 42rem;
  margin: 2rem 0 3rem 0;
`

const DeckHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
  position: relative;
  height: 10rem;
`

const CardProgress = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
  max-width: 50rem;
  font-weight: 600;
  font-size: 2rem;
  height: 5rem;
  position: absolute;
  left: 50%;
  top: 3.5rem;
  transform: translateX(-50%);
`

const CardButtonList = styled.div`
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`

const CardDeck = () => {
  const {
    deckState: { initial: deck, yes, totalCount },
    sendToNo,
    sendToMaybe,
    sendToYes,
  } = useContext(DeckContext)

  const currentIndex = totalCount - deck.length + 1

  const current = deck && deck.length > 0 ? deck[deck.length - 1] : null

  const handleCardButtonClick = (e, { callback }) => {
    e.preventDefault()
    console.log(deck)
    callback(current)
  }

  if (!current) {
    return <Congrats yesGroup={yes} />
  }

  return (
    <CardDeckWrapper>
      <DeckHeader>
        <CardProgress>{`${currentIndex} of ${totalCount}`}</CardProgress>
        <UndoButton />
      </DeckHeader>

      <CardStackWrapper>
        {deck.map((card, index) => (
          <Card rotate={index !== deck.length - 1} {...card} />
        ))}
      </CardStackWrapper>

      <CardButtonList>
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
      </CardButtonList>
    </CardDeckWrapper>
  )
}

export default CardDeck

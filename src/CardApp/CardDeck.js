import React from 'react'
import styled, { css } from 'styled-components/macro'
import { darken } from 'polished'
import CardProgress from './CardProgress'
import CardButton from './CardButton'
import UndoButton from './UndoButton'
import Congrats from './Congrats'
import { Card } from '../components'
import { ReactComponent as Int } from '../static/icons/interested.svg'
import { ReactComponent as NotInt } from '../static/icons/not-interested.svg'
import { ReactComponent as VeryInt } from '../static/icons/very-interested.svg'
import { useDeck } from '../state'

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
  width: calc(100vw - 4rem);
  height: calc((100vw - 4rem) * 1.4);
  max-width: 30rem;
  max-height: 42rem;
  margin: 2rem 0 3rem 0;
`

const DeckHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: relative;
  height: 10rem;
  max-width: 65rem;
  width: 100%;
`

const CardButtonList = styled.div`
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`

const CardDeck = () => {
  const { deck, totalCount, sendToYes, sendToMaybe, sendToNo } = useDeck()
  const { initial: currentDeck, yes } = deck

  const currentIndex = totalCount - currentDeck.length + 1

  const progress = Math.ceil((currentIndex * 100) / totalCount)

  const current =
    currentDeck && currentDeck.length > 0
      ? currentDeck[currentDeck.length - 1]
      : null

  const handleCardButtonClick = (e, { callback }) => {
    e && e.preventDefault()
    callback(current)
  }

  if (!current) {
    return <Congrats yesGroup={yes} />
  }

  const getCardRotation = (index, remaining) =>
    (index - Math.min(remaining - 1, 3)) * -2
  return (
    <CardDeckWrapper>
      <DeckHeader>
        <CardProgress progress={progress} />
        <UndoButton />
      </DeckHeader>

      <CardStackWrapper>
        {currentDeck
          .filter((_, i) => i > currentDeck.length - 5)
          .map((card, index) => (
            <Card
              key={card.key}
              rotate={index !== currentDeck.length - 1}
              card={card}
              rotation={getCardRotation(index, currentDeck.length)}
              handleLike={e =>
                handleCardButtonClick(e, {
                  callback: sendToYes,
                })
              }
              remainingCards={currentDeck.length}
            />
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

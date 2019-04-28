import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { darken } from 'polished'
import { DeckContext } from './CardApp'

import CardButton from './CardButton'
import UndoButton from './UndoButton'
import Congrats from './Congrats'
import { Button, Card, Text } from '../components'

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

  ${({ istop3 }) => {
    return !istop3
      ? ''
      : `
    width: calc(100vw - 2rem);
    height: calc((100vw - 2rem) * 1.4);
    max-width: 20rem;
    max-height: 28rem;
    `
  }}
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

const Top3List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`

const removeButtonProps = {
  bg: 'white',
  borderRadius: '50%',
  alignSelf: 'center',
}

const Top3Card = styled.div`
  width: 8rem;
  height: 11.2rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  color: #fff;

  button {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
    height: 100%;
    width: 100%;
    padding: 1rem;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #fff;
    border: none;

    span {
      align-self: flex-end;
      color: #fff;
      border: none;
      background: none;
    }
  }

  ${({ bg }) => {
    return bg ? `background: ${bg}` : ''
  }}
`

const CardDeck = ({ showTop3 }) => {
  const {
    deckState,
    setDeckState,
    sendToNo,
    sendToMaybe,
    sendToYes,
    totalCount,
    myTop3,
    setMyTop3,
  } = useContext(DeckContext)

  const { initial: deck, yes } = deckState

  const getCurrentIndex = () => {
    return showTop3 ? 0 : totalCount - deck.length + 1
  }

  const getProgressCount = () => {
    if (showTop3) return 'Select up to 3'
    return `${getCurrentIndex()} of ${totalCount}`
  }

  const current = deck && deck.length > 0 ? deck[deck.length - 1] : null

  const handleCardButtonClick = (e, { callback }) => {
    e.preventDefault()
    console.log(deck)
    callback(current)
  }

  if (!current && !showTop3) {
    return <Congrats yesGroup={yes} />
  }

  const handleRemoveTop3 = (e, card) => {
    setDeckState({
      ...deckState,
      initial: [...deckState.initial, card],
    })

    setMyTop3(myTop3.filter(c => c.key !== card.key))
  }

  const getTopCard = i => {
    const currentCard = myTop3[i]
    if (currentCard) {
      console.log(currentCard)
      return (
        <Top3Card bg={currentCard.variant}>
          <Button
            {...removeButtonProps}
            onClick={e => handleRemoveTop3(e, currentCard)}
          >
            <span>x</span>
            {currentCard.en.title}
          </Button>
        </Top3Card>
      )
    }
    return <Top3Card />
  }

  return (
    <CardDeckWrapper>
      <DeckHeader>
        <CardProgress>{getProgressCount()}</CardProgress>
        <UndoButton />
      </DeckHeader>

      <CardStackWrapper istop3={showTop3}>
        {deck.map((card, index) => (
          <Card
            key={card.key}
            isTop3={showTop3}
            rotate={index !== deck.length - 1}
            card={card}
          />
        ))}
      </CardStackWrapper>

      {!showTop3 && (
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
      )}
      {showTop3 && (
        <Top3List>
          {getTopCard(0)}
          {getTopCard(1)}
          {getTopCard(2)}
        </Top3List>
      )}
    </CardDeckWrapper>
  )
}

export default CardDeck

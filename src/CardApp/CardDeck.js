import React, { useContext } from 'react'
import styled, { css } from 'styled-components/macro'
import { darken } from 'polished'
import { DeckContext } from '../App'
import CardProgress from './CardProgress'
import CardButton from './CardButton'
import UndoButton from './UndoButton'
import Congrats from './Congrats'
import { Box, Button, Card, Text } from '../components'
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

const arrowProps = {
  p: '15px',
  bg: 'rgb(0,0,0,0.6)',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '2rem',
}

const ArrowContainer = styled(Box)`
  transform: translateY(-190px);
  width: 30rem;
  justify-content: space-between;
`

const CardDeck = () => {
  const {
    deckState,
    sendToNo,
    sendToMaybe,
    sendToYes,
    totalCount,
    rotateDeck,
    showTop3,
  } = useContext(DeckContext)
  console.log('rerender devk')
  const { initial: deck, yes } = deckState

  const getCurrentIndex = () => {
    return showTop3 ? 0 : totalCount - deck.length + 1
  }

  const progress = Math.ceil((getCurrentIndex() * 100) / totalCount)

  const current = deck && deck.length > 0 ? deck[deck.length - 1] : null

  const handleCardButtonClick = (e, { callback }) => {
    e.preventDefault()
    callback(current)
  }

  if (!current && !showTop3) {
    return <Congrats yesGroup={yes} />
  }

  const showArrowButtons = Boolean(showTop3 && deck.length)

  return (
    <CardDeckWrapper>
      <DeckHeader>
        <CardProgress progress={progress} />
        <UndoButton />
      </DeckHeader>

      <CardStackWrapper>
        {deck
          .filter((_, i) => i > deck.length - 5)
          .map((card, index) => (
            <Card
              key={card.key}
              rotate={index !== deck.length - 1}
              card={card}
              index={index}
            />
          ))}
      </CardStackWrapper>

      {showArrowButtons && (
        <ArrowContainer>
          <Button mr="3rem" {...arrowProps} onClick={() => rotateDeck('left')}>
            <Text lineHeight="1" as="span" fontWeight="800">{`<`}</Text>
          </Button>

          <Button ml="3rem" {...arrowProps} onClick={() => rotateDeck('right')}>
            <Text lineHeight="1" as="span" fontWeight="800">{`>`}</Text>
          </Button>
        </ArrowContainer>
      )}

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
    </CardDeckWrapper>
  )
}

export default CardDeck

import React, { useContext } from 'react'
import styled from 'styled-components'
import { DeckContext } from '../App'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  color: #6f6f6f;
  margin: 3rem 0;
`

const ConfirmButton = styled.button`
  background: #71459b;
  height: 5rem;
  width: 26rem;
  border-radius: 2.5rem;
  border: none;
  color: #fff;
  font-weight: 400;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.16);

  &:disabled {
    background: rgb(168, 140, 194);
  }
`

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 34rem;
  padding-bottom: 10rem;
`

const CardWrapper = styled.div`
  width: 13rem;
  margin: 0 2rem;
`

const Card = styled.div`
  width: 13rem;
  height: 17rem;
  background: ${({ background }) => background}
  border-radius: 2rem;
`

const CardTitle = styled.div`
  margin: 1rem 0 2rem;
  font-size: 1.4rem;
`

const Footer = styled.div`
  padding: 2rem;
  width: 100vw;
  background: #fff;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);
  position: fixed;
  bottom: 0;
`

const CardSelector = () => {
  const {
    deckState,
    // setDeckState,
    // myTop3,
    // setMyTop3,
  } = useContext(DeckContext)

  const { initial: cards } = deckState
  console.log(cards)
  return (
    <Wrapper>
      <Heading>Select up to 3 cards</Heading>
      <CardGrid>
        {cards.map(card => (
          <CardWrapper key={card.key}>
            <Card background={card.variant} />
            <CardTitle>{card.en.title}</CardTitle>
          </CardWrapper>
        ))}
      </CardGrid>
      <Footer>
        <ConfirmButton
          title="confirm selection"
          id="confirm-selection"
          type="button"
        >
          Confirm Selection
        </ConfirmButton>
      </Footer>
    </Wrapper>
  )
}

export default CardSelector

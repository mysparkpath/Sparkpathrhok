import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { DeckContext } from '../App'
import Image from '../components/image'
import { ReactComponent as Heart } from '../static/icons/heart.svg'

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
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: relative;
`

const Img = styled(Image)`
  position: absolute;
  max-width: 80%;
  max-height: 60%;
  bottom: 26px;
  left: 0;
  margin-left: 50%;
  transform: translateX(-50%);
}
`

const HeartIcon = styled(Heart)`
  height: 2rem;
  width: 2rem;
}
`

const Card = styled.label`
  display:block;
  width: 13rem;
  height: 17rem;
  background: ${({ background }) => background}
  border-radius: 2rem;
  position: relative;

  > input[type='checkbox'] {
    opacity: 0;
    position: absolute;
  }

  > input[type='checkbox']:focus + div {
    box-shadow: 0 0px 0px 4px rgba(0,0,200,0.4)
  }

  > input[type='checkbox']:checked + div {
    justify-content: center;
    align-items: center;
    background: ${({ background }) => `${background}99`}

    & > ${HeartIcon} {
      height: 8rem;
      width: 8rem;
    }

    
  }

`

const CardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1rem;
`

const SelectionIndex = styled.div`
  color: #fff;
  position: absolute;
  font-size: 3rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardSelector = () => {
  const {
    deckState,
    // setDeckState,
    // myTop3,
    setMyTop3,
  } = useContext(DeckContext)
  const [selectedCards, setSelectedCards] = useState([])

  const { initial: cards } = deckState

  const isSelected = key => {
    return selectedCards.includes(key)
  }

  const handleCardToggle = key => {
    let newSelections = []
    if (!isSelected(key) && selectedCards.length < 3) {
      newSelections = [...selectedCards, key]
    } else {
      newSelections = selectedCards.filter(c => c !== key)
    }
    setSelectedCards(newSelections)
  }

  const handleConfirmClick = event => {
    event.preventDefault()
    if (selectedCards.length === 0) return

    const top3 = cards.filter(c => isSelected(c.key))
    setMyTop3(top3)
    navigate('/welldone')
  }

  return (
    <Wrapper>
      <Heading>Select up to 3 cards</Heading>
      <CardGrid>
        {cards.map(({ key, variant, en: { title }, image_path }) => {
          const path = require(`../${image_path}`)
          const checked = isSelected(key)
          let selectionIndex = 0
          if (checked) {
            selectionIndex = selectedCards.indexOf(key) + 1
          }
          return (
            <CardWrapper key={key}>
              <Card background={variant} htmlFor={key}>
                <Img src={path} />
                <input
                  id={key}
                  onChange={() => handleCardToggle(key)}
                  type="checkbox"
                  checked={checked}
                />
                <CardContent>
                  <HeartIcon />
                  {selectionIndex > 0 && (
                    <SelectionIndex>{selectionIndex}</SelectionIndex>
                  )}
                </CardContent>
              </Card>
              <CardTitle>{title}</CardTitle>
            </CardWrapper>
          )
        })}
      </CardGrid>
      <Footer>
        <ConfirmButton
          type="button"
          title="confirm selection"
          id="confirm-selection"
          onClick={handleConfirmClick}
        >
          Confirm Selection
        </ConfirmButton>
      </Footer>
    </Wrapper>
  )
}

export default CardSelector

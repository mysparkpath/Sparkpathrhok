import React, { useState } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Box, Image } from '../components'
import { ReactComponent as Heart } from '../static/icons/heart.svg'
import { useTop3 } from '../state'
import strings from '../strings'
import { useLanguage } from '../state'
import MoreInfo from '../more-info'
import Modal from '../components/modal'


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
  width: 100vw;
  max-width: 34rem;
  padding-bottom: 10rem;
  justify-content: space-around;
`

const CardWrapper = styled.div`
  width: 13rem;
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

  &:hover {
    cursor: pointer;
  }
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
  width: 100%;
  background: #fff;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ToBackOfCardBtn = styled.a`
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 2rem;
  height: 2rem;
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`

const CardSelector = () => {
  const { setTop3, selector: cards } = useTop3()
  const [selectedCards, setSelectedCards] = useState([])
  const { lang } = useLanguage()
  const [selectedCard, setSelectedCard] = useState(false)

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
    setTop3(top3)
    navigate('/welldone')
  }

  let imgPath

  if (selectedCard) {
    imgPath = require(`../${selectedCard.image_path}`)
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" flex="1">
      <Heading>Select up to 3 cards</Heading>
      <CardGrid>
        {cards.map(card => {
          const { image_path, variant, key } = card

          const { title } = card[lang]

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
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '2rem',
                    width: '2rem',
                  }}
                />
                <CardContent>
                  <HeartIcon />
                  {selectionIndex > 0 && (
                    <SelectionIndex>{selectionIndex}</SelectionIndex>
                  )}
                </CardContent>
                <ToBackOfCardBtn
                  onClick={e => {
                    e.preventDefault()
                    setSelectedCard(card)
                  }}
                >
                  i
                </ToBackOfCardBtn>
              </Card>
              <CardTitle>{title}</CardTitle>
            </CardWrapper>
          )
        })}
      </CardGrid>
      <Modal isOpen={selectedCard}>
        <MoreInfo
          info={selectedCard}
          lang={lang}
          imagePath={imgPath}
          variant={selectedCard && selectedCard.variant}
          closeModal={() => setSelectedCard(null)}
        />
      </Modal>
      <Footer>
        <ConfirmButton
          type="button"
          title="confirm selection"
          id="confirm-selection"
          onClick={handleConfirmClick}
          disabled={selectedCards.length === 0}
        >
          {strings.confirm[lang]}
        </ConfirmButton>
      </Footer>
    </Box>
  )
}

export default CardSelector

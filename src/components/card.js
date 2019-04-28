import React, { useState, useContext } from 'react'
import Image from './image'
import styled from 'styled-components/macro'

import { Button, Text } from '../components'
import { DeckContext } from '../App'
import { ReactComponent as Arrow } from '../static/icons/backButton.svg'
import { ReactComponent as Binoculars } from '../static/icons/BNKL.svg'

const buttonProps = {
  bg: 'rgba(0,0,0,0.5)',
  borderRadius: '5rem',
  alignSelf: 'center',
  p: '0.6rem 1.5rem',
  mt: '4rem',
  border: 'none',
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 5px;
  width: calc(100vw - 2rem);
  height: calc((100vw - 2rem) * 1.4);
  max-width: 30rem;
  max-height: 42rem;
  border: 1px solid #fff;

  ${({ rotation }) => {
    return rotation ? `transform: rotate(${rotation}deg);` : ''
  }}

  ${({ istop3 }) => {
    return istop3 !== 'true'
      ? ''
      : `
    width: calc(100vw - 2rem);
    height: calc((100vw - 2rem) * 1.4);
    max-width: 20rem;
    max-height: 28rem;
    `
  }}
`

const Title = styled.div`
  font-size: 1.8rem;
  color: white;
  display: flex;
  justify-content: center;
  line-height: 1.6;
  margin-top: 3rem;

  ${({ contrast }) => {
    return contrast ? 'color: rgba(0,0,0,0.85);' : 'color: white;'
  }}
  /* background: rgba(0, 0, 0, 0.6); */

  ${({ istop3 }) => {
    return istop3 === 'true' ? `font-size: 1.2rem` : ''
  }}
`

const ImageWrapper = styled.div`
  /* padding: 100px 50px 0 50px; */
`

const Img = styled(Image)`
  max-width: 20rem;
  max-height: 20rem;

  ${({ istop3 }) => {
    return istop3 === 'true'
      ? `
    max-width: 10rem;
  max-height: 10rem;`
      : ''
  }}
`

const Front = ({
  imagePath = '',
  en = {},
  rotate,
  variant,
  isTop3,
  card,
  toggleView,
  front,
  contrast,
}) => {
  const { myTop3, setMyTop3, deckState, setDeckState, language } = useContext(
    DeckContext
  )
  const { title } = card[language]

  const path = require(`../${imagePath}`)
  const randomRotation = rotate ? Math.random() * 5 : 0

  const handleSelectClick = () => {
    console.log('SELECT!', card)
    if (myTop3.length < 3) {
      setMyTop3([...myTop3, card])
      setDeckState({
        ...deckState,
        initial: deckState.initial.filter(c => c.key !== card.key),
      })
    }
  }

  return (
    <Wrapper
      istop3={isTop3.toString()}
      rotation={randomRotation}
      style={{ background: variant }}
    >
      {isTop3 && (
        <ToBackOfCardBtn
          onClick={e => {
            toggleView(!front)
          }}
        >
          i
        </ToBackOfCardBtn>
      )}
      <ImageWrapper>
        <Img istop3={isTop3.toString()} src={path} />
      </ImageWrapper>
      <Title istop3={isTop3.toString()} contrast={contrast}>
        <div style={{ maxWidth: '50%' }}>{title}</div>
      </Title>
      {isTop3 && (
        <Button {...buttonProps} onClick={handleSelectClick}>
          <Text
            color="#fff"
            fontSize="1.4rem"
            fontWeight="600"
            textTransform="uppercase"
          >
            SELECT
          </Text>
        </Button>
      )}
    </Wrapper>
  )
}

const BackWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 5px;
    width: calc(100vw - 2rem);
    height: calc((100vw - 2rem) * 1.4);
  max-width: 32rem;
  max-height: 62rem;
  margin-top: -10rem;
  margin-left: -6rem;
  z-index: 999;
`

const BtnWrapper = styled.div`
   display: flex;
   align-self: flex-start;
  padding-top: 10px;
`

const ArrowIcon = styled(Arrow)`
    height: 1.3rem;
    margin-right: 5px;
`
const BinocularsIconContainer = styled.div`
  transform: translateY(-60%);
`
const BinocularsIcon = styled(Binoculars)`
  display: flex;
  align-items: center;
  height: 5rem;
`

const BackBtn = styled.a`
  font-size: 0.8em;
  display: flex;
  text-decoration: none;
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #444;
  }
`
const ToBackOfCardBtn = styled.a`
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
`

const TopContainer = styled.div`
  min-width: inherit;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px 10px 0 0;
`

const BottomContainer = styled.div`
  min-width: inherit;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border-radius: 0 0 10px 10px;
  overflow-y: visible;
`

const TitleTop = styled.header`
  font-size: 1.7rem;
  color: #fff;
  display: flex;
  justify-content: center;
  line-height: 1.6;
  margin-bottom: 10px;
`

const TitleBottom = styled.header`
    font-size: 1.7rem;
    display: flex;
    justify-content: center;
    line-height: 1.6;
    margin: -20% 0 10px 0;
    color: #444;
  overflow-y: scroll;
`

const TextTop = styled.p`
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    text-transform: none;
    line-height: 1.25;
    text-align: center;
    color: #fff;
`

const TextBottom = styled.p`
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: none;
    line-height: 1.25;
    color: rgba(0, 0, 0, 0.75);
`

const Back = ({ card, variant, toggleView, front }) => {
  const { language } = useContext(DeckContext)
  const { title, blurb_1, blurb_2 } = card[language]

  return (
    <BackWrapper style={{ background: variant }}>
      <TopContainer>
        <BtnWrapper>
          <ArrowIcon />
           <BackBtn onClick={e => toggleView(!front)}>Back</BackBtn>
        </BtnWrapper>
         <TitleTop>{title}</TitleTop>
            <TextTop>{blurb_1}</TextTop>
      </TopContainer>
      <BottomContainer>
        <BinocularsIconContainer>
          <BinocularsIcon />
        </BinocularsIconContainer>
          <TitleBottom>Opportunities</TitleBottom>
        <TextBottom>{blurb_2}</TextBottom>
      </BottomContainer>
    </BackWrapper>
  )
}

const Card = ({ card, isTop3, rotate }) => {
  const { image_path, variant, contrast } = card
  const [front, toggleView] = useState(true)
  if (front) {
    return (
      <Front
        rotate={rotate}
        imagePath={image_path}
        variant={variant}
        isTop3={isTop3}
        card={card}
        contrast={contrast}
        front={front}
        toggleView={toggleView}
      />
    )
  }
  return (
    <Back card={card} variant={variant} front={front} toggleView={toggleView} />
  )
}

export default Card

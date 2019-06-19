import React, { useState } from 'react'
import Image from './image'
import styled from 'styled-components/macro'

import { ReactComponent as Arrow } from '../static/icons/backButton.svg'
import { ReactComponent as Binoculars } from '../static/icons/BNKL.svg'
import { useLanguage } from '../state'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 5px;
  width: calc(100vw - 4rem);
  height: calc((100vw - 4rem) * 1.4);
  max-width: 30rem;
  max-height: 42rem;
  border: 1px solid #fff;

  ${({ rotation }) => {
    return rotation ? `transform: rotate(${rotation}deg);` : ''
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
  }} /* background: rgba(0, 0, 0, 0.6); */
`

const ImageWrapper = styled.div`
  /* padding: 100px 50px 0 50px; */
`

const Img = styled(Image)`
  max-width: 20rem;
  max-height: 20rem;
`

const Front = ({
  imagePath = '',
  en = {},
  rotate,
  variant,
  card,
  toggleView,
  front,
  contrast,
  index,
}) => {
  const { lang } = useLanguage()

  console.log('CARD', { card, lang })

  const { title } = card[lang]

  const path = require(`../${imagePath}`)
  const indexRotation = 3 + index * -2

  return (
    <Wrapper rotation={indexRotation} style={{ background: variant }}>
      <ToBackOfCardBtn
        onClick={e => {
          toggleView(!front)
        }}
      >
        i
      </ToBackOfCardBtn>

      <ImageWrapper>
        <Img src={path} />
      </ImageWrapper>
      <Title contrast={contrast}>
        <div style={{ maxWidth: '50%' }}>{title}</div>
      </Title>
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
  width: calc(100vw - 4rem);
  height: calc((100vw - 4rem) * 1.4);
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
  const { lang } = useLanguage
  const { title, blurb_1, blurb_2 } = card[lang]

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

const Card = ({ card, rotate, index }) => {
  const { image_path, variant, contrast } = card
  const [front, toggleView] = useState(true)
  if (front) {
    return (
      <Front
        rotate={rotate}
        imagePath={image_path}
        variant={variant}
        card={card}
        contrast={contrast}
        front={front}
        toggleView={toggleView}
        index={index}
      />
    )
  }
  return (
    <Back card={card} variant={variant} front={front} toggleView={toggleView} />
  )
}

export default Card

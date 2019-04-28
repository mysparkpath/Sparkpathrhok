import React, { useState } from 'react'
import Image from './image'
import styled from 'styled-components/macro'

// Front of card styles //

const FrontWrapper = styled.div`
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
    return rotation && `transform: rotate(${rotation}deg)`
  }}
`

const FrontTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.8rem;
  color: white;
  display: flex;
  justify-content: center;
  line-height: 1.6;
  margin-top: 3rem;
  background: rgba(0, 0, 0, 0.6);
`

const FrontImageWrapper = styled.div`
  /* padding: 100px 50px 0 50px; */
`

const FrontImg = styled(Image)`
  max-width: 20rem;
  max-height: 20rem;
`

// Back of card styles //

// add back-of-card styles here!!

// Card components //

const BackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 5px;
  background: green;
`
const BackTopTitle = styled.div`
  font-size: 1.8rem;
  color: black;
  display: flex;
  justify-content: center;
  line-height: 1.6;
  margin-top: 3rem;
  background: rgba(0, 0, 0, 0.6);
`

const Front = ({ imagePath = '', en = {}, rotate }) => {
  const { title, variant } = en
  const path = require(`../${imagePath}`)
  const randomRotation = rotate ? Math.random() * 5 : 0
  return (
    <FrontWrapper rotation={randomRotation} style={{ background: variant }}>
      <FrontImageWrapper>
        <FrontImg src={path} />
      </FrontImageWrapper>
      <FrontTitle>
        <div style={{ maxWidth: '50%' }}>{title}</div>
      </FrontTitle>
    </FrontWrapper>
  )
}

const Back = ({ en = {} }) => {
  const { title } = en
  return (
    <BackWrapper>
      <BackTopTitle>{title}</BackTopTitle>
    </BackWrapper>
  )
}

const Card = ({ image_path, en, rotate }) => {
  const [front, toggleView] = useState(false)
  if (front) {
    return <Front rotate={rotate} imagePath={image_path} en={en} />
  }
  return <Back en={en} />
}

export default Card

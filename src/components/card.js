import React, { useState } from 'react'
import Image from './image'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  width: calc(100vw - 2rem);
  height: calc((100vw - 2rem) * 1.4);
  max-width: 35rem;
  max-height: 49rem;
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.8rem;
  color: white;
  display: flex;
  justify-content: center;

  line-height: 1.6;
  margin-top: 3rem;
  background: rgba(0, 0, 0, 0.6);
`

const ImageWrapper = styled.div`
  /* padding: 100px 50px 0 50px; */
`

const Img = styled(Image)`
  max-width: 25rem;
  max-height: 25rem;
`

const Front = ({ imagePath = '', en = {} }) => {
  const { title, variant } = en

  const path = require(`../${imagePath}`)

  return (
    <Wrapper style={{ background: variant }}>
      <ImageWrapper>
        <Img src={path} />
      </ImageWrapper>
      <Title>
        <div style={{ maxWidth: '50%' }}>{title}</div>
      </Title>
    </Wrapper>
  )
}

const Back = () => {
  return <div />
}

const Card = ({ image_path, en }) => {
  const [front, toggleView] = useState(true)

  if (front) {
    return <Front imagePath={image_path} en={en} />
  }

  return <Back />
}

export default Card

import React, { useState } from 'react'
import Image from './image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  height: 40rem;
  border-radius: 5px;
  background: rgb(96, 183, 208);
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: white;
  display: flex;
  justify-content: center;
  height: 33%;
  line-height: 1.6;
  margin-top: 3rem;
`

const ImageWrapper = styled.div`
  padding: 100px 50px 0 50px;
`

const Img = styled(Image)`
  max-width: 90%;
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

import React, { useState } from 'react'
import Image from './image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 40rem;
  border-radius: 3px;
  margin-left: 9rem;
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: white;
`

const Front = ({ imagePath = '', en = {} }) => {
  const { title, variant } = en
  return (
    <Wrapper style={{ background: variant }}>
      <Image src={imagePath} />
      <Title>{title}</Title>
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

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
/*
const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  background: rgb(96, 183, 208);
  align: center;
  flex-direction: column;
`
*/

const Blurb = styled.div`
  margin-top: 25px;
  display: flex;
  text-align: left;
  font-size: 10px;
`
const Careers = styled.ul`
  margin-top: 25px;
  font-size: 15px;
  background: white;
  color: black;
  display: flex;
`
/*
const Title = styled.div`
  margin-top: 25px;
  text-align: left;
  font-size: 1.4rem;
`
*/

const DataCornerLowLeft = styled.div`
  font-size: 15px;
  margin-left: 1px;
`

const DataCornerLowRight = styled.div`
  font-size: 15px;
  margin-right: 1px;
`

const Footer = styled.div`
  background-color: black;
  justify-content: space-between;
  margin-bottom: 1px;
  display: flex;
`

const Back = ({ en }) => {
  const { title, blurb_1, blurb_2, careers, variant } = en
  return (
    <Wrapper style={{ background: variant }}>
      <Title>{title}</Title>

      <Blurb>{blurb_1}</Blurb>

      <Careers>
        {careers.map(career => (
          <li>{career}</li>
        ))}
      </Careers>

      <Blurb>{blurb_2}</Blurb>

      <Footer>
        <DataCornerLowLeft> mysparkpath.com </DataCornerLowLeft>
        <DataCornerLowRight> LOADLOGOHERE</DataCornerLowRight>
      </Footer>
    </Wrapper>
  )
}

const Card = ({ image_path, en }) => {
  const [front, toggleView] = useState(true)

  if (front) {
    return <Front imagePath={image_path} en={en} />
  }

  return <Back />
}

export default Card

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

const BackWrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  border-radius: 5px;
  width: calc(100vw - 2rem);
  height: calc((100vw - 2rem) * 1.4);
  max-width: 35rem;
  max-height: 49rem;
`
const BackTitle = styled.div`
  border: 1px solid red;
  text-transform: capitalize;
  font-size: 2.4rem;
  color: white;
  display: flex;
  justify-content: left;
  max-height: 3em;
  text-align: left;
  line-height: 1.6;
`

const ImageWrapper = styled.div`
  /* padding: 100px 50px 0 50px; */
`

const Img = styled(Image)`
  max-width: 25rem;
  max-height: 25rem;
`

const Blurb = styled.div`
  margin-top: 25px;
  display: flex;
  text-align: left;
  font-size: 1.5rem;
  line-height: 2rem;
  max-height: 20vh;
  overflow-y: scroll;
  border: 1px solid orange;
`
const Careers = styled.div`
  margin-top: 25px;
  font-size: 10px;
  background: white;
  color: black;
  display: flex;
`
const DataCornerLowLeft = styled.div`
  font-size: 15px;
  margin-left: 1px;
`

const DataCornerLowRight = styled.div`
  font-size: 15px;
  margin-right: 1px;
`

const Footer = styled.footer`
  background-color: black;
  align-items: flex-end;
`
const Front = ({ imagePath = '', en = {} }) => {
  const { title, variant } = en

  const path = require(`../${imagePath}`)

  return (
    <Wrapper style={{ background: variant }}>
      <ImageWrapper>
        <Img src={path} />
      </ImageWrapper>
      <FrontTitle>
        <div style={{ maxWidth: '50%' }}>{title}</div>
      </FrontTitle>
    </Wrapper>
  )
}
const CareerIcon = styled.div`
  background-color: white;
`
const ListCareer = styled.div`
  text-align: left;
`
const careersDisplay = (careers, listNum) => {
  var answer = []
  var i
  if (listNum === 1) {
    //displays first half of the carrer list
    for (i = 0; i < careers.length / 2; i++) {
      answer[i] = careers[i]
    }
  } else {
    //displays second half of the carrer list
    for (i = careers.length / 2; i < careers.length; i++) {
      //display first half
      answer[i] = careers[i]
    }
  }

  return answer.map(item => <li>{item}</li>)
}

const Back = ({ en }) => {
  const { title, blurb_1, blurb_2, careers, variant } = en
  return (
    <BackWrapper style={{ background: variant }}>
      <BackTitle>{title}</BackTitle>

      <Blurb>{blurb_1}</Blurb>

      <Careers>
        <div>
          <CareerIcon>CareerIcon</CareerIcon>
        </div>
        <ListCareer>{careersDisplay(careers, 1)}</ListCareer>
        <ListCareer>{careersDisplay(careers, 2)}</ListCareer>
      </Careers>

      <Blurb>{blurb_2}</Blurb>

      <Footer>
        <DataCornerLowLeft> mysparkpath.com </DataCornerLowLeft>
        <DataCornerLowRight> LOADLOGOHERE</DataCornerLowRight>
      </Footer>
    </BackWrapper>
  )
}

const Card = ({ image_path, en }) => {
  const [front, toggleView] = useState(false)

  if (front) {
    return <Front imagePath={image_path} en={en} />
  }

  return <Back en={en} />
}

export default Card

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  background: rgb(96, 183, 208);
  align: center;
  flex-direction: column;
`

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
const Title = styled.div`
  margin-top: 25px;
  text-align: left;
  font-size: 1.4rem;
`

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

const Card = currentCard => {
  console.log(currentCard)
  return <Back en={currentCard.cardTest.en} />
}

export default Card

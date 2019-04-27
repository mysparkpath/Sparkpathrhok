import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  background: red;
`

const Blurb = styled.div`
  display: flex;
`
const Careers = styled.div`
  display: flex;
`
const Title = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 1.4rem;
`

const Back = ({ en }) => {
  const { title, blurb_1, blurb_2, careers, variant } = en
  console.log(title, en)
  return (
    <Wrapper style={{ background: variant }}>
      <Title>{title}</Title>
      <Blurb>{blurb_1}</Blurb>
      <Careers>{careers}</Careers>
      <Blurb>{blurb_2}</Blurb>
    </Wrapper>
  )
}

const Card = () => {
  return <Back en={{ title: 'TITLEJOSE' }} />
}

export default Card

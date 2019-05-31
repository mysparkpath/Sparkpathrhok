import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const CardProgressBar = styled.div`
  border: 1px solid ${darken(0.15, '#9d70c7')};
  content: '';
  height: 1.2rem;
  width: 20rem;
  border-radius: 10px;
`

const CardProgressFill = styled.div`
  border: 1px solid ${darken(0.15, '#9d70c7')};
  height: 1.2rem;
  margin-top: -1px;
  width: ${props => `${props.progress}%`}};
  min-width: 1.5rem;
  border-radius: 10px;
  background: ${darken(0.15, '#9d70c7')};
`
const CardProgress = ({ progress }) => {
  return (
    <CardProgressBar>
      <CardProgressFill progress={progress} />
    </CardProgressBar>
  )
}

export default CardProgress

import React, { useState } from 'react'
import Image from './image'
import styled from 'styled-components/macro'
import MoreInfo from '../more-info'
import { useLanguage } from '../state'
import Modal from './modal'

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

const ImageWrapper = styled.div``

const Img = styled(Image)`
  max-width: 20rem;
  max-height: 20rem;
`

const Front = ({
  imagePath,
  variant,
  card,
  toggleView,
  front,
  contrast,
  rotation,
}) => {
  const { lang } = useLanguage()
  const { title } = card[lang]

  return (
    <Wrapper rotation={rotation} style={{ background: variant }}>
      <ToBackOfCardBtn
        onClick={e => {
          toggleView(!front)
        }}
      >
        i
      </ToBackOfCardBtn>

      <ImageWrapper>
        <Img src={imagePath} />
      </ImageWrapper>
      <Title contrast={contrast}>
        <div style={{ maxWidth: '50%' }}>{title}</div>
      </Title>
    </Wrapper>
  )
}

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

const Card = ({ card, rotate, rotation, handleLike }) => {
  const { image_path, variant, contrast } = card
  const [isOpenModal, setIsModalOpen] = useState(false)
  const { lang } = useLanguage()

  const path = require(`../${image_path}`)

  return (
    <React.Fragment>
      <Front
        rotate={rotate}
        imagePath={path}
        variant={variant}
        card={card}
        contrast={contrast}
        front
        toggleView={() => setIsModalOpen(!isOpenModal)}
        rotation={rotation}
      />
      <Modal isOpen={isOpenModal}>
        <MoreInfo
          info={card}
          lang={lang}
          imagePath={path}
          variant={variant}
          closeModal={() => setIsModalOpen(false)}
          handleLike={handleLike}
        />
      </Modal>
    </React.Fragment>
  )
}

export default Card

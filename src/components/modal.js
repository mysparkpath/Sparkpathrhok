import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Box from './box'

const modalRoot = document.getElementById('modal')
const el = document.createElement('div')

const Modal = ({ children, isOpen }) => {
  useEffect(() => {
    modalRoot.appendChild(el)

    return () => {
      if (modalRoot.contains(el)) {
        modalRoot.removeChild(el)
      }
    }
  }, [])

  return (
    isOpen &&
    ReactDOM.createPortal(
      <Box
        position="fixed"
        left="0"
        top="0"
        width="100%"
        height="100%"
        overflow="auto"
        bg="white"
      >
        {children}
      </Box>,
      el
    )
  )
}

export default React.memo(Modal)

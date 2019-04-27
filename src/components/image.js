import React from 'react'

const Image = ({ altText, src, ...imageProps }) => {
  return <img alt={altText} src={src} {...imageProps} />
}

export default Image

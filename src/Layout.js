import React from 'react'
import { Box } from './components'

const Layout = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="flex-start"
    >
      {children}
    </Box>
  )
}

export default Layout

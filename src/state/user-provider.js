import React, { useContext, useState } from 'react'

const UserContext = React.createContext()

function UserProvider(props) {
  const [user, setUser] = useState([])

  const value = {
    user,
    setUser,
  }

  return <UserContext.Provider value={value} {...props} />
}

function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUser }

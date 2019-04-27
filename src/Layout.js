import React from 'react'
import { Link } from '@reach/router'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header>
        <div>
          <Link to="/">Main</Link>
        </div>
        <h1>SparkPath</h1>
      </header>
      {children}
    </div>
  )
}

export default Layout

import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-4">
      <Link className="navbar-brand mx-auto" to="/">
        Lyrics Search
      </Link>
    </nav>
  )
}

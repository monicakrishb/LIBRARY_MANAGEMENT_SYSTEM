import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>
        <h1>world</h1>
        <button type="button">Success</button>

    </div>
    <nav>
        <Link to="/">Login</Link>
    </nav>
    </>
  
  )
}


import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Routing() {
    let nav = useNavigate()

    function handleNavigate(){
        nav("/basics")

    }
  return (
    <div>
      <h1>Routing</h1>
      <Link to="/usestate">
      <button>use state</button>
      </Link>
      <button onClick={handleNavigate}>basics</button>
    </div>
  )
}

export default Routing

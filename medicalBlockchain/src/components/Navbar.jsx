import React from 'react'
import './Navabar.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="navbarLeft">
        <div className="innerNav">
          <Link>
            <div className="navBtn">
              <h1>About Us</h1>
            </div>
          </Link>
          <Link>
            <div className="navBtn">
                <h1>Products</h1>
            </div>
          </Link>
          <Link>
            <div className="navBtn">
                <h1>Dashboard</h1>
            </div>
          </Link>
          <Link to="/search">
            <div className="navBtn">
                <h1>Search</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbarRight">
        <div className="innerNav2">
            <div className="navBtn2">
                <h1>Login</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

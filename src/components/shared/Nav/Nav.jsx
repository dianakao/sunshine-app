import React from 'react'
import './Nav.css'

import sunLogo from "../../../assets/sun-logo.png"

const Nav = (props) => {

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img src={sunLogo} alt="" className="sunshine"/>
        </div>
        <div className="links">
          <a href="#" className="link">Sign Up/ Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
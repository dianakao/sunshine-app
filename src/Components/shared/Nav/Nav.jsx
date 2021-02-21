import React from 'react'
import './Nav.css'

const Nav = (props) => {

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img src="../../../Assets/sunshine.jpg" alt="" className="sunshine"/>
        </div>
        <div className="links">
          <a href="#" className="link">Login</a>
          <a href="" className="link">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
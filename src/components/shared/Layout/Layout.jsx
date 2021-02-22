import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">
        {props.children}
        The main content goes here
      </div>
      <Footer />
    </div>
  )
}

export default Layout

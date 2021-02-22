import React from 'react'
import './Sunscore.css'

const Sunscore = (props) => {
  const handleClick = (e) => {
    console.log("Clicked Sunscore Info")
  }

  return (
    <div className="sunscorebutton"><span class="material-icons md-24">wb_sunny</span></div>
  )
}

export default Sunscore
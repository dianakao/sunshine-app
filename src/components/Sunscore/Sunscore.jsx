import React from 'react'
import './Sunscore.css'

const Sunscore = (props) => {

  // console.log(props.onClick)
  // const handleClick = (e) => {
  //   console.log("Clicked Sunscore Info")
  // }

  return (
    // <div className="sunscorebutton" onClick={props.onClick}><span className="material-icons md-24">wb_sunny</span></div>
    <div className="sunscorebutton" onClick={props.onClick}></div>
  )
}

export default Sunscore
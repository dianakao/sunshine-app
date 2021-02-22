import React from 'react'
import './Sunscore.css'

const Sunscore = (props) => {
  const copy = {
    "h1": "What is Sunscore",
    "text1": "Sunscore rates the home’s potentials for solar using a scale of 1-100. The higher the rating, the better suited for the home",
    "h2": "Sunscore Components",
    "c1": ["Regional Climate", "value"],
    "c2": ["Electricty Rate", "value"],
    "c3": ["Solar Rates", "value"],
    "c4": ["Shadow Rates", "value"],
    "summary": ["Your Sunscore", "value"],
    "more" : "View more Sunscore details"
  }
  return (
    <div className="sunscorebutton" onClick={props.onClick} data-text={JSON.stringify(copy)}></div>
  )
}

export default Sunscore
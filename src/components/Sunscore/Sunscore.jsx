import React from 'react'
import './Sunscore.css'

const Sunscore = (props) => {
  const copy = {
    "key1": "Data related to Sun Score"
  }
  return (
    <div className="sunscorebutton" onClick={props.onClick} data-text={JSON.stringify(copy)}></div>
  )
}

export default Sunscore
import React from 'react'
import './Savings.css'

const Savings = (props) => {
  const copy = {
    "key1": "Data related to Savings"
  }

  return (
    <div className="savingsbutton" onClick={props.onClick} data-text={JSON.stringify(copy)}></div>
  )
}

export default Savings
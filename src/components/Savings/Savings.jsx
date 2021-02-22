import React from 'react'
import './Savings.css'

const Savings = (props) => {
  const copy = {
    "savings": "Your savings/month are:",
    "amount": "value",
    "note": "This was calculated based on a number of factors including: ",
    "factors": ["Tax incentives"]
  }

  return (
    <div className="savingsbutton" onClick={props.onClick} data-text={JSON.stringify(copy)}></div>
  )
}

export default Savings
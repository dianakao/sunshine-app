import React from 'react'
import './Savings.css'

const Savings = (props) => {
  


  const handleClick = (e) => {
    console.log("Clicked Savings Info")
  }

  return (
    <div className="savingsbutton"><span className="material-icons md-24">attach_money</span></div>
  )
}

export default Savings
import React from 'react'
import './ButtonBar.css'
import Impact from '../Impact/Impact'
import Savings from '../Savings/Savings'
import Sunscore from '../Sunscore/Sunscore'


const ButtonBar = (props) => {

  return (
    <div className="infobuttons">
      <Sunscore />
      <Savings />
      <Impact />
    </div>
  )
}

export default ButtonBar
import React from 'react'
import './Overlay.css'
import Sunscore from '../../components/Sunscore/Sunscore'
import Savings from '../../components/Savings/Savings'
import Impact from '../../components/Impact/Impact'

const Overlay = (props) => {

  function handleClick(e) {
    console.log(e.target.className)
    let destination = document.querySelector('.infotext')
    console.log(destination)
    destination.innerHTML = `You clicked Sunscore.`
  }


  return (
    <>
      <div className="infobuttons">
        <Sunscore onClick={handleClick} />
        <Savings onClick={handleClick} />
        <Impact onClick={handleClick} />
      </div>
      <div className="infotext"></div>
    </>
  )
}

export default Overlay
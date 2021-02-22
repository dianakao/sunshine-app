import React from 'react'
import './Overlay.css'
import Sunscore from '../../components/Sunscore/Sunscore'
import Savings from '../../components/Savings/Savings'
import Impact from '../../components/Impact/Impact'

const Overlay = (props) => {

  function handleClick(e) {
    console.log(`Clicked {e.target}`)
    let destination = document.querySelector('infotext')
    destination.innerHTML = `{e.target} wqs selected.`
  }


  return (
    <>
      <div className="infobuttons">
        <Sunscore onclick = {handleClick} />
        <Savings onclick = {handleClick} />
        <Impact onclick = {handleClick} />
      </div>
      <div className="infotext"></div>
    </>
  )
}

export default Overlay
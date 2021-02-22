import React from 'react'
import './Overlay.css'
import Sunscore from '../../components/Sunscore/Sunscore'
import Savings from '../../components/Savings/Savings'
import Impact from '../../components/Impact/Impact'

const Overlay = (props) => {

  function handleClick(e) {
    let category =  e.target.className
    let selection
    let data = JSON.parse(e.target.getAttribute('data-text'))
    let destination = document.querySelector('.infotext')
    // console.log(e.target.className, JSON.stringify(e.target.getAttribute('data-text')))
    console.log(destination)
    console.log(data)
    switch (category) {
      case "sunscorebutton":
        selection = "Sun Score"
        break;
      case "impactbutton":
        selection = "Impact"
        break;
      case "savingsbutton":
        selection = "Savings"
        break;
    }


    destination.innerHTML = `This is ${selection} info. Including ${data.key1}`
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
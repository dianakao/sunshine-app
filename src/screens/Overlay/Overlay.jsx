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
        let heading = document.createElement('h2')
        let text1 = document.createElement('p')
        heading.innerHTML = data.h1
        text1.innerText = data.text1
        destination.appendChild(heading)
        destination.appendChild(text1)
        // destination.innerHTML = `This is ${selection} info. Including ${data.h1}`
        break;
      case "impactbutton":
        selection = "Impact"
        destination.innerHTML = `This is ${selection} info. Including ${data.key1}`
        break;
      case "savingsbutton":
        selection = "Savings"
        destination.innerHTML = `This is ${selection} info. Including ${data.key1}`
        break;
    }


  }


  return (
    <div className="infooverlay">
      <div className="handle"></div>
      <div className="infobuttons">
        <Sunscore onClick={handleClick} />
        <Savings onClick={handleClick} />
        <Impact onClick={handleClick} />
      </div>
      <div className="infotext"></div>
    </div>
  )
}

export default Overlay
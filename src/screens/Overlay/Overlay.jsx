import React from 'react'
import './Overlay.css'
import Sunscore from '../../components/Sunscore/Sunscore'
import Savings from '../../components/Savings/Savings'
import Impact from '../../components/Impact/Impact'

const Overlay = (props) => {

  function clearPanel(obj = null, tag = null) {
    let parent
    if (obj){
      parent = document.getElementsByClassName(obj)
    } else if (tag) {
      parent = document.getElementsByTagName(tag)
    }

    while (parent.firstChild){
      parent.removeChild(parent.lastChild)
    }

  }


  function handleClick(e) {
    const buttons = ['sunscorebutton','impactbutton','savingsbutton']
    // buttons.forEach(x => x)
    let button
    let category =  e.target.className
    let selection = ""
    let heading = ""
    let text1 = ""
    let data = JSON.parse(e.target.getAttribute('data-text'))
    let destination = document.querySelector('.infotext')
    // console.log(e.target.className, JSON.stringify(e.target.getAttribute('data-text')))
    console.log(destination)
    console.log(data)
    switch (category) {
      case "sunscorebutton":
        button = document.getElementsByClassName(category)
        // button.classList.add("selected")        
        console.log(button)
        clearPanel('infotext')
        clearPanel(null, 'h2')
        clearPanel(null, 'p')
        selection = "Sun Score"
        heading = document.createElement('h2')
        text1 = document.createElement('p')
        heading.innerHTML = data.h1
        text1.innerText = data.text1
        destination.appendChild(heading)
        destination.appendChild(text1)
        // destination.innerHTML = `This is ${selection} info. Including ${data.h1}`
        break;
      case "impactbutton":
        button = document.getElementsByClassName(category)
        console.log(button)
        // button.classList.add("selected")        
        clearPanel('infotext')
        selection = "Impact"
        destination.innerHTML = `This is ${selection} info. Including ${data.key1}`
        break;
      case "savingsbutton":
        button = document.getElementsByClassName(category)
        // button.classList.add("selected")        
        console.log(button)
        clearPanel('infotext')
        clearPanel('infotext')
        selection = "Savings"
        heading = document.createElement('h2')
        text1 = document.createElement('p')
        heading.innerHTML = data.savings
        text1.innerText = data.note
        destination.appendChild(heading)
        destination.appendChild(text1)

        // destination.innerHTML = `This is ${selection} info. Including ${heading}`
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
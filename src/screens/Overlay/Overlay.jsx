import React from 'react'
import './Overlay.css'
import Sunscore from '../../components/Sunscore/Sunscore'
import Savings from '../../components/Savings/Savings'
import Impact from '../../components/Impact/Impact'

const Overlay = (props) => {
  const grandparent = document.getElementsByClassName('infooverlay')
  const heading = document.createElement('h2')
  const text1 = document.createElement('p')
  const destination = document.querySelector('.infotext')
  let button

  function clearPanel() {
    const parent = document.getElementsByClassName('infotext')
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild)
    }
  }

  window.addEventListener('click', function(e){
    const element = document.getElementsByClassName('infotext')


    // if (element[0].classList.contains('clicked')){
    //   console.log(e.target.tagName)
    // } else{
    //   console.log(e.target.classList)
    //   element[0].classList.remove('clicked')
    // }
  });

  function handleClick(e) {
    const buttons = ['sunscorebutton', 'impactbutton', 'savingsbutton']
    buttons.forEach(x => {
      document.getElementsByClassName(x)[0].classList.remove('selected')
    })

    if (!grandparent[0].classList.contains('clicked')) {
      grandparent[0].classList.add('clicked')
    }

    // console.log(grandparent[0].classList)
    let category = e.target.className
    let selection = ""
    let data = JSON.parse(e.target.getAttribute('data-text'))
    // console.log(e.target.className, JSON.stringify(e.target.getAttribute('data-text')))
    // console.log(destination)
    // console.log(data)
    switch (category) {
      case "sunscorebutton":
        button = document.getElementsByClassName(category)
        button[0].classList.toggle('selected')
        clearPanel()
        selection = "Sun Score"
        heading.innerHTML = data.h1
        text1.innerText = data.text1
        destination.appendChild(heading)
        destination.appendChild(text1)
        break;
      case "impactbutton":
        button = document.getElementsByClassName(category)
        button[0].classList.toggle('selected')
        clearPanel()
        selection = "Sun Score"
        heading.innerHTML = data.h1
        text1.innerText = data.impact
        destination.appendChild(heading)
        destination.appendChild(text1)
        break;
      case "savingsbutton":
        button = document.getElementsByClassName(category)
        button[0].classList.toggle('selected')
        clearPanel()
        selection = "Savings"
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
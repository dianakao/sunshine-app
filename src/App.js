import React, {useEffect, useState} from 'react'
import {Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './screens/Home/Home'



/*---- Programatically create the script file necessary to load the places API ----*/

const loadScript = (url, callback) => {
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.async = true

  if (script.readyState) {
    console.log("There is a ready state")
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null
        callback()
      }
    }
  } else {
    script.onload = () => callback()
  }

  script.src = url
  document.getElementsByTagName("head")[0].appendChild(script)
}

function test() {
  console.log("First Test")
}


function App() {



  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {

      /* ----Note:----
      
        1. The script is loaded asynchronously so that the other elements of the page
        can load more quickly. With a stable internet connection the load time is
        hardly noticeable, however a loading screen may be desirable for people
        with less stable internet 
      
        2. The loadScript function needs to be on the highest level component to
        prevent the script from being added multiple times. Loading the Googe Maps API
        more than once will not immediately crash the program but may have unforseen
        consequences
        */

    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&libraries=places&v=weekly`,
      () => {setIsLoaded(true)}
    )
  }, [])

  return (
      
      <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route exact path="/" render={()=> <Home isLoaded={isLoaded}/>}/>
      </Switch>
    </div>


  );
}

export default App;

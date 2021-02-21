
import React, {useEffect, useState} from 'react'
import logo from './assets/logo.svg';
import './App.css';

import LocationSearchBar from './components/LocationSearchBar/LocationSearchBar.jsx'
import LocationMap from './components/LocationMap/LocationMap.jsx'
import testUtils from 'react-dom/test-utils';


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

  /* The script is loaded asynchronously so that the other elements of the page
    can load more quickly. With a stable internet connection the load time is
    hardly noticeable, however a loading screen may be desirable for people
    with less stable internet */

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&libraries=places&v=weekly`,
      () => {setIsLoaded(true)}
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { isLoaded &&
          <LocationSearchBar/>
        }
        
        { isLoaded &&
          <LocationMap/>
        }

      </header>
    </div>
  );
}

export default App;

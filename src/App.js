
import React, {useEffect, useState} from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import LocationSearchBar from './components/LocationSearchBar/LocationSearchBar'
import LocationMap from './components/LocationMap/LocationMap'
import testUtils from 'react-dom/test-utils';
import Overlay from './screens/Overlay/Overlay'
import Home from './screens/Home/Home'
import Results from './screens/Results/Results'


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
        { isLoaded &&
          <LocationSearchBar/>
        }
        
        { isLoaded &&
          <LocationMap/>
        }
      <Overlay />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>

  );
}

export default App;

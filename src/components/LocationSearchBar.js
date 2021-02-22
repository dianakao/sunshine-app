import React, { useEffect, useRef, useState } from 'react'
import '../Styles/LocationSearchBar.css';


let autoComplete

/*---- Programatically create the script file necessary to load the places API ----*/

const loadScript = (url, callback) => {
    let script = document.createElement("script")
    script.type = "text/javascript"
  

    let asyncAtt = document.createAttribute("async")
    let deferAtt = document.createAttribute("defer")

    if (script.readyState) {
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
    script.setAttributeNode(asyncAtt)
    script.setAttributeNode(deferAtt)
    document.getElementsByTagName("head")[0].appendChild(script)
}

/*---- Enable location based autocomplete from Google Maps ----*/


function initAutocomplete(autocompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
     autocompleteRef.current,
      { types: ["address"], 
        componentRestrictions: { country: "us" },
        fields: ['geometry', 'formatted_address']
      }
    )

    autoComplete.addListener('place_changed', onPlaceChanged)
  }


function onPlaceChanged(){

  let place = autoComplete.getPlace()

  if (!place.geometry){
    // Change styling to signal that there was an error
  } else{

    // Currently just create and print the object, will eventually
    // pass this into a state variable at a higher level
    let currentPlace = {
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }

    console.log(currentPlace)
  }
   


}

/*---- Create the component ----*/

function LocationSearchBar() {
    const [query, setQuery] = useState("")
    const autocompleteRef = useRef(null)

    useEffect(() => {
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&libraries=places`,
          () => {initAutocomplete(autocompleteRef)})
        
      }, [])

    return(
        <div>
            <input
                ref={autocompleteRef}
                id="autocomplete"
                placeholder="Enter address"
                type="text"
            />
        </div>
    )
}
  

export default LocationSearchBar
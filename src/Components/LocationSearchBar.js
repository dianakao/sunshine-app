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

      console.log(autoComplete)

    autoComplete.addListener('place_changed', onPlaceChanged)
  }


function onPlaceChanged(){

  let place = autoComplete.getPlace()

  if (!place.geometry){
    console.log("It works")
    console.log(document.getElementById("autocomplete").placeholder)
  } else{
    console.log(place.formatted_address)
    console.log(place.geometry.location.lat())
    console.log(place.geometry.location.lng())
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
import React, { useEffect, useRef, useState } from 'react'

let autoComplete

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


function initAutocomplete(autocompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
     autocompleteRef.current,
      { types: ["address"], 
        componentRestrictions: { country: "us" },
        fields: ['geometry', 'formatted_address']
      }
    )

    autocompleteRef.current.addEventListener('oninput', onPlaceChanged)
  }

function onPlaceChanged(){
  console.log("Place changed")
}


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
                placeholder="Enter a City"
                type="text"
            />
        </div>
    )
}
  

export default LocationSearchBar
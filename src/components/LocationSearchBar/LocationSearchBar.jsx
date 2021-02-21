import React, { useEffect, useRef} from 'react'
import './LocationSearchBar.css';

// Raise scope of autoComplete so that it can be referred to within all functions
// within this file
let autoComplete

// Redundant code also included in Location, maybe different in final product
// to provide a better visual experience for users
let brooklynBounds = {
  north: 40.740259,
  south: 40.568521,
  west: -74.043277,
  east: -73.856017
}


/*---- Enable location based autocomplete from Google Maps ----*/

function initAutocomplete(autocompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
     autocompleteRef.current,
      { types: ["address"], 
        componentRestrictions: { country: "us" },
        fields: ['geometry', 'formatted_address'],
        bounds: brooklynBounds,
        strictBounds: true
      }
    )

    autoComplete.addListener('place_changed', onPlaceChanged)
  }


function onPlaceChanged(){

  let place = autoComplete.getPlace()

  if (!place.geometry){
    // Change styling to signal that there was an error
  } else{

    console.log(place)
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

  const autocompleteRef = useRef(null)
    
  useEffect( () => {
    initAutocomplete(autocompleteRef)
  },[])

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

import React, {useEffect, useRef} from 'react'
import "./LocationMap.css"

// Initialize objects to be used between functions, but not outside the
// scope of this component
let googleMap
let infoWindow
let mapMarker

let brooklynBounds = {
  north: 40.740259,
  south: 40.568521,
  west: -74.043277,
  east: -73.856017
}

function initGoogleMap(googleMapRef) {

  // Create a new googleMap object
  googleMap = new window.google.maps.Map(
      googleMapRef.current, 
      {
        center: { lat: 40.6782, lng: -73.9442},
        zoom: 11,
        streetViewControl: false,
        mapTypeControl: false,
        restriction: {
          latLngBounds: brooklynBounds,
          strictBounds: false,
        }
      }
  )

  infoWindow = new window.google.maps.InfoWindow()
  mapMarker = new window.google.maps.Marker({
    position: { lat: 40.6782, lng: -73.9442},
    map: googleMap
  })
}

function LocationMap(){

  const googleMapRef = useRef(null)
    
  useEffect( () => {
    initGoogleMap(googleMapRef)
  },[])
    
  return(
    <div className="map-container">
      <div 
          ref={googleMapRef}
          id="map"> 
      </div>
    </div>
  )
}

export default LocationMap
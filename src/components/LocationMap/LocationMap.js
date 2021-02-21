
import React, {useEffect, useRef} from 'react'
import "./LocationMap.css"

let googleMap

let brooklynBounds = {
  north: 40.740259,
  south: 40.568521,
  west: -74.043277,
  east: -73.856017
}

function initGoogleMap(googleMapRef) {
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
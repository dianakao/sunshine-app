
import React, {useEffect, useRef} from 'react'
import "./LocationMap.css"

// Initialize objects to be used between functions, but not outside the
// scope of this component
let googleMap
let infoWindow
let mapMarker

// Defines the bounds of the map that the user is allowed to view
let brooklynBounds = {
  north: 40.740259,
  south: 40.568521,
  west: -74.043277,
  east: -73.856017
}

/* 
  Documentation for creating custom svg map markers can be found here:
    https://developers.google.com/maps/documentation/javascript/symbols
*/
const markerIcon = {
  path:
  "M12.7692 0.92308C6.07112 0.92308 0.653809 6.34039 0.653809 13.0385C0.653809 22.125 12.7692 35.5385 12.7692 35.5385C12.7692 35.5385 24.8846 22.125 24.8846 13.0385C24.8846 6.34039 19.4673 0.92308 12.7692 0.92308ZM12.7692 17.3654C10.3807 17.3654 8.44227 15.4269 8.44227 13.0385C8.44227 10.65 10.3807 8.71154 12.7692 8.71154C15.1577 8.71154 17.0961 10.65 17.0961 13.0385C17.0961 15.4269 15.1577 17.3654 12.7692 17.3654Z",
  fillColor: "#FF7A00",
  fillOpacity: 1,
  strokeWeight: 0.25, // added some slight opacity to the border to allow for better visual distinction of the marker
  rotation: 0,
};


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
    map: googleMap,
    icon: markerIcon
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
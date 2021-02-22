import React from 'react'
import './Home.css'
import WeatherPanel from '../../components/WeatherPanel/WeatherPanel.jsx'
import LocationSearchBar from '../../components/LocationSearchBar/LocationSearchBar.jsx'
import GhostButton from '../../components/shared/GhostButton/GhostButton'


function Home({isLoaded}){

  return (
    <div className="home-container">
  
      <div className="hero-img">

      </div>

      <div className="headline">
        <h1>The Sunshine Collective</h1>
        <h2> Access <span>solar energy</span> with ease</h2>
      </div>

      { isLoaded &&
          <LocationSearchBar/>
      }
      <div className="weather-wrapper">
        <h1>Current Conditions: Brooklyn</h1>
        <WeatherPanel/>
      </div>
      <GhostButton text="Learn More"/>
    </div>

  )
}

export default Home
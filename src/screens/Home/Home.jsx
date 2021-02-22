import React from 'react'
import './Home.css'
import WeatherPanel from '../../components/WeatherPanel/WeatherPanel.jsx'
import LocationSearchBar from '../../components/LocationSearchBar/LocationSearchBar.jsx'
import GhostButton from '../../components/shared/GhostButton/GhostButton'


import sunLogo from "../../assets/sun-logo.png"

function Home({isLoaded}){

  return (
    <div className="home-container">
  
      <div className="hero-img">
        <img src={sunLogo} alt=""/>
      </div>

      <div className="headline">
        <h1 className="orange">The Sunshine Collective</h1>
        <h2> Access <span className="orange">solar energy</span> with ease</h2>
      </div>

      <div className="search-wrapper">
        { isLoaded &&
            <LocationSearchBar/>
        }
        <div className="blurb-wrapper">
          <h2 className> Get your Sunscore to see how solar power can help you!</h2>
        </div>
      </div>

      <div className="weather-wrapper">
        <h1>Current Conditions: Brooklyn</h1>
        <WeatherPanel/>
      </div>
      <GhostButton text="Learn More"/>
    </div>

  )
}

export default Home
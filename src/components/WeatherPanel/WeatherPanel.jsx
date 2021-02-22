

import axios from '../../services/weatherAPI.js'
import React, {useEffect, useState} from 'react'

import WeatherCard from '../WeatherCard/WeatherCard.jsx'

import './WeatherPanel.css'


import sunriseLogo from "../../assets/sunrise-logo.png"
import sunsetLogo from "../../assets/sunset-logo.png"
import tempLogo from "../../assets/temp-logo.png"
import visibilityLogo from "../../assets/visibility-logo.png"

function convertTimeToString(unixTS){

    let date = new Date(unixTS * 1000)
    return `${date.getHours()}:${date.getMinutes()}`
}


function WeatherPanel(){

    const [weatherData, setWeatherData] = useState({})

    useEffect( () => {
        axios
            .get()
            .then((res) => {
                
                setWeatherData({
                    sunrise: convertTimeToString(res.data.sys.sunrise),
                    sunset: convertTimeToString(res.data.sys.sunset),
                    high_low: `${res.data.main.temp_min} F/ ${res.data.main.temp_max} F`,
                    visibility:`${Math.round(res.data.visibility * 0.00062137)} mi`,
                })
            })
    }, [])

    console.log(weatherData)
    return(
        <div className="weather-panel">
            <div className="card-wrapper">
                <WeatherCard imgURL={sunriseLogo} title="Sunrise" data={weatherData.sunrise}/>
                <WeatherCard imgURL={tempLogo} title="High/Low" data={weatherData.high_low}/>
                <WeatherCard imgURL={sunsetLogo} title="Sunset" data={weatherData.sunset}/>
                <WeatherCard imgURL={visibilityLogo} title="Visibility" data={weatherData.visibility}/>
            </div>
        </div>
    )

}

export default WeatherPanel
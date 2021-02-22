

import axios from '../../services/weatherAPI.js'
import React, {useEffect, useState} from 'react'

import WeatherCard from '../WeatherCard/WeatherCard.jsx'

import './WeatherPanel.css'


import sunLogo from "../../assets/sun-logo.png"

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
                    visibility: res.data.visibility * 0.00062137,
                })
            })
    }, [])

    console.log(weatherData)
    return(
        <div className="weather-panel">
            <WeatherCard imgURL={sunLogo} title="Sunrise" data={weatherData.sunrise}/>
        </div>
    )

}

export default WeatherPanel
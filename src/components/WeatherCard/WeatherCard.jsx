import React from 'react'

import './WeatherCard.css'


function WeatherCard({imgURL, title, data}){

    return(
        <div className="weather-card">
            <div className="icon-wrapper">
                <img src={imgURL}/>
            </div>
            <div className="card-info">
                <h1>{title}</h1>
                <p>{data}</p>
            </div>
        </div>

    )

}

export default WeatherCard
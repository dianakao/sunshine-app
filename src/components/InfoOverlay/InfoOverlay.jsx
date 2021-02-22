import React from 'react'
import './InfoOverlay.css'

import SunshineGph from '../SunshineGph/SunshineGph.jsx'

function InfoOverlay() {

    return(
        <div>
            <div className="info-overlay">
                <div className="info-header">
                    <h1> Amount of Daylight in Day</h1> 
                </div>
                <SunshineGph/>
            </div>
        </div>
    )
}

export default InfoOverlay
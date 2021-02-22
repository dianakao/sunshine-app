import React from 'react'
import './GhostButton.css'

function GhostButton({text}){

    return(
        <div className="ghost-button">
            <h1>{text}</h1>
        </div>
    )
}

export default GhostButton
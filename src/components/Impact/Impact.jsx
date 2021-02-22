import React from 'react'
import './Impact.css'
import { Icon, InlineIcon } from '@iconify/react';
import baselinePeopleOutline from '@iconify-icons/ic/baseline-people-outline';


const Impact = (props) => {
  const copy={
    "h1": "Your community impact is",
    "impact": "number",
    "note": "This was claculated based on a number of factors including",
    "factors": ["kWh saved"]
  }

  return (
    <div className="impactbutton" onClick={props.onClick} data-text={JSON.stringify(copy)}></div>
  )
}

export default Impact
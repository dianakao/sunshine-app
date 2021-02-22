import React from 'react'
import './Impact.css'
import { Icon, InlineIcon } from '@iconify/react';
import baselinePeopleOutline from '@iconify-icons/ic/baseline-people-outline';


const Impact = (props) => {
  


  const handleClick = (e) => {
    console.log("Clicked Impact Info")
  }

  return (
    <div className="impactbutton"><Icon icon={baselinePeopleOutline} /></div>
  )
}

export default Impact
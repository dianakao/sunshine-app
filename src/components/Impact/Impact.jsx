import React from 'react'
import './Impact.css'
import { Icon, InlineIcon } from '@iconify/react';
import baselinePeopleOutline from '@iconify-icons/ic/baseline-people-outline';


const Impact = (props) => {
  const copy={
    "key1": "Data related to Impact"
  }

  return (
    <div className="impactbutton" onClick={props.onClick} data-text={JSON.stringify(copy)}></div>
  )
}

export default Impact
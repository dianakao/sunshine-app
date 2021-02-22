import React, { useEffect, useRef } from 'react'
import './SunshineGph.css'

import * as d3 from "d3";

const testData = [
    {
        season: 'Summer',
        dailySunshine: 98
    },
    {
        season: 'Spring/Fall',
        dailySunshine: 87
    },
    {
        season: 'Winter',
        dailySunshine: 63
    },

]

function drawBarChart(shadowData, gphRef) {

    /*---- Create the chart dimensions ----*/
    let dimensions =  {
        width: 156,
        height: 81,
        margin: {
            top: 10,
            right: 3,
            bottom: 10,
            left: 3,
        },
    }

    dimensions.boundedWidth = dimensions.width
        - dimensions.margin.left
        - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height
        - dimensions.margin.top
        - dimensions.margin.bottom

    dimensions.boundedWidth = dimensions.width
        - dimensions.margin.left
        - dimensions.margin.right
    
    dimensions.boundedHeight = dimensions.height
        - dimensions.margin.top
        - dimensions.margin.bottom

    /*----Draw the canvas ----*/
    const svgContainer = d3.select(gphRef.current)
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
    
    // Set the bounds of the chart
    const chart = svgContainer.append('g')
      .attr('transform', `translate(${dimensions.margin.left}, ${dimensions.margin.top})`);

    /*---- Create the scales ----*/
    const xScale = d3.scaleBand()
      .range([0, dimensions.boundedWidth])
      .domain(shadowData.map((s) => s.season))
      .padding(0.3)
    
    const yScale = d3.scaleLinear()
      .range([dimensions.boundedHeight, 0])
      .domain([0, 100]);

    /* 
        Add a color scale for each of the categories ---- I suspect that ORDER
        IS IMPORTANT FOR THE SCALE. Visual testing is necessary
    */
    const colorScale = d3.scaleOrdinal()
        .domain(shadowData.map((s) => s.season))
        .range(['#FFB800', '#7CCA69', '#84B5FF'])


    // Add the x-axis to the bottom of the chart
    chart.append('g')
      .attr('transform', `translate(0, ${dimensions.boundedHeight})`)
      .attr("class", "xAxis")
      .call(d3.axisBottom(xScale));

    /*---- Draw the data ----*/
    const barGroups = chart.selectAll()
      .data(shadowData)
      .enter()
      .append('g')

    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.season))
      .attr('y', (g) => yScale(g.dailySunshine))
      .attr('height', (g) => dimensions.boundedHeight - yScale(g.dailySunshine))
      .attr('width', xScale.bandwidth())
      .attr('fill', (g) => colorScale(g.season))
 

    barGroups 
      .append('text')
      .attr('class', 'percentSunshine') // give our text the dailySunshine class
      .attr('x', (a) => xScale(a.season) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.dailySunshine) - 2) // height is inverted with the y-scale
      .attr('text-anchor', 'middle')
      .text((a) => `${a.dailySunshine}%`)

}

function SunshineGph(){

    const gphRef = useRef(null)

    useEffect( () => {
        drawBarChart(testData, gphRef)
    }, [])

    return(
        <div 
        id="img-wrapper"
        ref={gphRef}
        >
        </div>
    )

}

export default SunshineGph
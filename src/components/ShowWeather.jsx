// Created a new component that will pass weather data into this component

import React from 'react'

function ShowWeather(props) {
  // console.log("props", props);
  const {data} = props; 
  console.log(data); 


  return (
    <div className= "displayweather">
      <div className="maincard">
        <span className="cardtitle">
          {data.name}, {data.sys.country}. Weather
        </span>
        &nbsp; &nbsp; 
        <span className="cardsubtitle">
          As of {new Date().toLocaleTimeString()}
        </span>
        <h1>
          {Math.floor(((data.main.temp - 273) * 1.8) + 32)}
          <sup>o</sup>
        </h1>
      </div>
      
    </div>
  )
}

export default ShowWeather

// Create a div with class name of display weather. Have a main card div that will contain the card title which spands the data.name and data.sys.country, thereby displaying the weather. 
// In the second psan labeled cardsubtitle, use new Date () to display date, and then .toLocaleTimeString method to display the current time. 
// Create an h1 and within pass the props of {data.main.temp} in order to show the temperature. 
// Googled how to convert kelvin to farenheit since data is displayed only in kelvin using math.floor. 
// used super tag to enclose o for temp symbol
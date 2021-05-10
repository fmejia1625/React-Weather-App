// Created a new component that will pass weather data into this component

import React from 'react'

function ShowWeather(props) {
  // console.log("props", props);
  const {data} = props; 
  console.log(data); 

  // eslint-disable-next-line no-useless-concat
  const icons = 'http://openweathermap.org/img/wn/' + `${data.weather[0].icon}` + '.png'

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
        <span className="weather-main">
          {data.weather[0].main}
        </span>
        <img src={icons} className="weather-icon" alt = ""/>
        <span className="weather-description">
          {data.weather[0].description}
        </span>
      </div>

      <div className="weatherdetails">
        <div className="tableOne">
          <table>
            <tr>
              <td>
                <h4>High/Low</h4>
              </td>
              <td>
                <span>
                  {Math.floor(((data.main.temp_max - 273) * 1.8) + 32)} <sup>o</sup> F /{" "}
                  {Math.floor(((data.main.temp_min - 273) * 1.8) + 32)} <sup>o</sup> F
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Humidity</h4>
              </td>
              <td>
                <span>
                  
                  {data.main.humidity} %
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Pressure</h4>
              </td>
              <td>
                <span>
                  {data.main.pressure} hPa
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Visibility</h4>
              </td>
              <td>
                <span>
                  {data.visibility * 0.00062137119224} Mi
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      
      <div className="tableTwo">
        <table>
          <tr>
            <td>
              <h4>Sunrise</h4>
            </td>
            <td>
              <span>{new Date(data.sys.sunrise * 1000 ).toLocaleTimeString()}</span>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Sunset</h4>
            </td>
            <td>
              <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
            </td>
          </tr>
        </table>
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
// created tables in order to render information on the screen
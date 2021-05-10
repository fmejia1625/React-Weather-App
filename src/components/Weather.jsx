import React from 'react';
import './weatherstyle.css'

function Weather() {
  return (
    <div className = "weather">
      <span className="title">
        Weather React App
      </span>
      <br/>

      <form >
        <input type="text" name="city" placeholder="city"/>
        <input type="text" name="country" placeholder="country"/>
        <button className="getWeather">Submit</button>
      </form>
    </div>
  );
}

export default Weather;


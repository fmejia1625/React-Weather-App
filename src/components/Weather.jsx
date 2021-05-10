import React, { useState } from 'react';
import ShowWeather from './ShowWeather';
import './weatherstyle.css'


// using functional components over class components due to ease of use. 
// Here we import useState from react and then set const [form, setForm] to useState
function Weather() {
  // create a variable to will hold api weather key
const weatherKey = '5162a3caf9bbd39fc2394c2ab186c5d0';



const [form,setForm] = useState({
  city:"", 
  country: ""
});
const [weather, setWeather] = useState([])

// using asynchronous function in order to fetch data from weather API. If the input is empty, alert the user. else, create variable data and use await fetch in order to retrieve data of city from API. Use template strings here (like pokemon API) 
// use .then to create a promise that will get response (res) and log it in JSON format. 
async function weatherData(e) {

  e.preventDefault();
  if(form.city === "") {
    alert("Please enter a city");
  } else {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${weatherKey}`)
    // this allows the whole object to be printed to the console. 
    .then((res) => res.json())
    .then((data) => data);

    // assign data to setWeather state
    setWeather(
      {
        data : data
      }
    );
  }
}

// function that will handle changes
const handleChange = (e) => {
  let name = e.target.name; 
  let value = e.target.value; 
// if name is city,  set value of city in the form state, use spread operator to set form to form and city:value
  if(name === "city") {
    setForm({...form, city:value})
  }
// The smae logic is applied to the country:value
  if(name === "country") {
    setForm({...form, country:value})
  }
  // Test---> print out the result using form.city and form.country
  // console.log(form.city, form.country)
};

  return (
    <div className = "weather">
      <span className="title">
        Weather React App
      </span>
      <br/>

      <form >
        {/* invoke handleChange function here while passing the event with arrow function */}
        <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
        {/* add spaces using  nonbreaking space (HTML entity)*/}
        &nbsp; &nbsp; 
        <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)}/>
        {/* evoke onClick function, pass event to weatherData */}
        <button className="getWeather" onClick={e => weatherData(e)}>Submit</button>
      </form>

      {/* Ternary: If weather.data is not undefined, render the ShowWeather component, else display null */}
      {
        weather.data !== undefined ? 
        <div>
          <ShowWeather data={weather.data}/>
        </div>
        : null
      }
     
    </div>
  );
}

export default Weather;


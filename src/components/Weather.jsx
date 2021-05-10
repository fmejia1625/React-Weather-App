import React, { useState } from 'react';
import './weatherstyle.css'


// using functional components over class components due to ease of use. 
// Here we import useState from react and then set const [form, setForm] to useState
function Weather() {
const [form,setForm] = useState({
  city:"", 
  country: ""
})

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
  // print out the result using form.city and form.country
  console.log(form.city, form.country)
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
        <button className="getWeather">Submit</button>
      </form>
    </div>
  );
}

export default Weather;


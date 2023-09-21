import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
export default function weather(props) {
  function displayWeather(response) {
    alert(`${response.data.name} and ${response.data.main.temp}`);
  }
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  return (
    <div className="weather">
      <h1>Hello</h1>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

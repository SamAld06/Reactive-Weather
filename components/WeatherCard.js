import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"


function WeatherCard(props) {
  function findForecast() {
    if (props.city.forecast === "Sunny") {
      return sunny
    }else if (props.city.forecast === "Rainy") {
      return rainy
    }else if (props.city.forecast === "Partly cloudy") {
      return partlyCloudy
    }else if (props.city.forecast === "Cloudy") {
      return cloudy
    }else {
      return "error"
    }
  }
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {findForecast()} alt="Card image cap" id = "icon"/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{props.city.city}</h3>
            <h5 className="card-text">{props.city.temperature}</h5>
            <h5 className="card-text">{props.city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard
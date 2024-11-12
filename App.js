import React from 'react';
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard.js"
import cities from "./data.js"
import {useState} from "react"
import Location from "./components/Location.js"

function App() {
    const [location, setLocation] = useState("London")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                {cities.map((city) => ( <WeatherCard city = {city}/>))}
                


            </div>
            
        </>
    )
}

export default App;
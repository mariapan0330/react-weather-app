import React, { useState } from 'react'
import './Landing.css'
import QuickSearch from "./QuickSearch"
import DisplayResults from "./DisplayResults"

export default function Landing(props){
    const [displayTheResults, setDisplayTheResults] = useState(false);
    const [weatherData, setWeatherData] = useState(false);

    return (
        <div className="landing p-5">
            <a className="ps-5 navbar-brand fs-1 fw-bold" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">WHATEVER THE WEATHER</a>
            <QuickSearch getWeatherData={props.getWeatherData} setWeatherData={setWeatherData} setDisplayTheResults={setDisplayTheResults} />
            {displayTheResults ? <DisplayResults weatherData={weatherData} /> : <></> }
            
        </div>
    )
}
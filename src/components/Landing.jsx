import React, { useState, useEffect } from 'react'
import './Landing.css'
import QuickSearch from "./QuickSearch"
import DisplayResults from "./DisplayResults"
import defaultImg from '../images/default.jpg'

export default function Landing(props){
    const [displayTheResults, setDisplayTheResults] = useState(false);
    const [weatherData, setWeatherData] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState(defaultImg)
    const [possibleWeathers, setPossibleWeathers] = useState(['clear', 'clouds', 'default', 'drizzle', 'fog', 'mist', 'rain', 'snow', 'thunderstorm', 'tornado'])
    const [weather, setWeather] = useState("props.weatherData['weather'][0]['main'].toLowerCase()")


    // TODO: change the background image depending on the weather. Have to await the response from the HTTP request.
    
    // useEffect(() => {
    //     if (possibleWeathers.includes(weather)){
    //         console.log('weather is in the list');
    //         // setBackgroundImg(`../images/${weather}.jpg`)
    //     } else {
    //         // setBackgroundImg('default')
    //     }
    // }, [weather, possibleWeathers])


    return (
        <div className="landing p-5" 
        style={{backgroundImage: `url(${backgroundImg})`}}
            >
            <a className="ps-5 navbar-brand fs-1 fw-bold" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">WHATEVER THE WEATHER</a>

            <QuickSearch getWeatherData={props.getWeatherData} setWeatherData={setWeatherData} setDisplayTheResults={setDisplayTheResults} />
            {displayTheResults ? <DisplayResults weatherData={weatherData} setBackgroundImg={setBackgroundImg} /> : <></> }
            
        </div>
    )
}
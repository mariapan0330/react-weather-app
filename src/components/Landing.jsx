import React, { useState, useEffect } from 'react'
import './Landing.css'
import QuickSearch from "./QuickSearch"
import DisplayResults from "./DisplayResults"
import clearImg from '../images/clear.jpg'
import cloudsImg from '../images/clouds.jpg'
import defaultImg from '../images/default.jpg'
import drizzleImg from '../images/drizzle.jpg'
import fogImg from '../images/fog.jpg'
import mistImg from '../images/mist.jpg'
import rainImg from '../images/rain.jpg'
import snowImg from '../images/snow.jpg'
import thunderstormImg from '../images/thunderstorm.jpg'
import tornadoImg from '../images/tornado.jpg'

export default function Landing(props){
    const [displayTheResults, setDisplayTheResults] = useState(false);
    const [weatherData, setWeatherData] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState(defaultImg)
    const [weather, setWeather] = useState('default')

    const weatherImages = {
        clear: clearImg,
        clouds: cloudsImg,
        drizzle: drizzleImg,
        fog: fogImg,
        mist: mistImg,
        rain: rainImg,
        snow: snowImg,
        thunderstorm: thunderstormImg,
        tornado: tornadoImg,
    }

    
    useEffect(() => {
        if (weather in weatherImages){
            setBackgroundImg(weatherImages[weather])
        } else {
            setBackgroundImg(defaultImg)
        }
    }, [weather])


    return (
        <div className="landing p-5" 
        style={{backgroundImage: `url(${backgroundImg})`}}
            >
            <a className="ps-5 navbar-brand fs-1 fw-bold" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='blank'>WHATEVER THE WEATHER</a>

            <QuickSearch setWeather={setWeather} getWeatherData={props.getWeatherData} setWeatherData={setWeatherData} setDisplayTheResults={setDisplayTheResults} />
            {displayTheResults ? <DisplayResults weatherData={weatherData} /> : <></> }
            
        </div>
    )
}
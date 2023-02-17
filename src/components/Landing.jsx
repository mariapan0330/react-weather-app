/**
 * Hello Airbnb recruiters! :)
 * 
 * This file contains the code for the Landing page component of my weather reporting web app.
 * (Currently deployed at https://stalwart-tiramisu-dee856.netlify.app/ - check it out!)
 * 
 * The application fetches data from the OpenWeather API based on what city the user enters,
 * and presents the results in an aesthetically pleasing way (always a plus).
 * 
 * This particular component renders the searchbar and search results, and it changes the website's
 * background image based on the weather data received.
 * 
 * I chose to show you this because I think it demonstrates my understanding of a couple of React 
 * Hooks and I like my use of a JS object to select the correct image for the corresponding weather.
 * 
 * I originally did this project in vanilla JS/HTML, but I migrated it to React so I could submit 
 * it as a code snippet to you guys and show off some framework skills too!
 * 
 * I hope this snippet leaves you saying, "The forecast is bright with this one!"
 * 
 * From your shiny new hire,
 * Maria
 * 
*/

import React, { useState, useEffect, useMemo } from 'react'
import './Landing.css'
import QuickSearch from './QuickSearch'
import DisplayResults from './DisplayResults'
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
    const [displayTheResults, setDisplayTheResults] = useState(false); // toggled when the QuickSearch form is submitted if the data is good.
    const [weatherData, setWeatherData] = useState(''); // filled by QuickSearch when the data is fetched
    const [backgroundImg, setBackgroundImg] = useState(defaultImg);
    const [weather, setWeather] = useState('');

    
    const weatherImages = useMemo(() => {
        return {
            clear: clearImg,
            clouds: cloudsImg,
            drizzle: drizzleImg,
            fog: fogImg,
            mist: mistImg,
            rain: rainImg,
            snow: snowImg,
            thunderstorm: thunderstormImg,
            tornado: tornadoImg
        };
    }, []);

    
    useEffect(() => {
        // Not all possible weathers have a corresponding image
        if (weather in weatherImages){
            setBackgroundImg(weatherImages[weather]);
        } else {
            setBackgroundImg(defaultImg);
        };
    }, [weather, weatherImages]);


    return (
        <div className="landing p-5" 
        style={{backgroundImage: `url(${backgroundImg})`}}>

            <a className="ps-5 navbar-brand fs-1 fw-bold" 
            href=".">
                WHATEVER THE WEATHER
            </a>

            {/* The QuickSearch component contains the search by city name functionality, 
            but I put the OpenWeather API fetch request in App.js because I might use it in a hypothetical Advanced Search component oOoOOooh*/}
            {/* Github for QuickSearch component: https://github.com/mariapan0330/react-weather-app/blob/main/src/components/QuickSearch.jsx */}
            <QuickSearch 
            setWeather={setWeather} 
            getWeatherData={props.getWeatherData} 
            setWeatherData={setWeatherData} 
            setDisplayTheResults={setDisplayTheResults} 
            />
            
            {displayTheResults ? <DisplayResults weatherData={weatherData} /> : <></> }
            
        </div>
    );
};
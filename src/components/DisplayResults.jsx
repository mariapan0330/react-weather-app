import React, { useState, useEffect } from 'react'
import './DisplayResults.css'

export default function DisplayResults(props){
    const [backgroundImage, setBackgroundImage] = useState('default')
    const [possibleWeathers, setPossibleWeathers] = useState(['clear', 'clouds', 'default', 'drizzle', 'fog', 'mist', 'rain', 'snow', 'thunderstorm', 'tornado'])
    const [weather, setWeather] = useState(props.weatherData['weather'][0]['main'].toLowerCase())

    useEffect(() => {

        if (possibleWeathers.includes(weather)){
            console.log('weather is in the list');
            setBackgroundImage(weather)
        } else {
            setBackgroundImage('default')
        }
    }, [weather, possibleWeathers])

    console.log('Building Info Card...');


    return (
        <>
            <div id='results-row' className="row">
            {/* <!-- COLUMN 1: City, Temp, Feels Like --> */}
            <div className="col-6" >
                <p>
                <span id="city">{props.weatherData['name']}, </span>
                <span id="country">{props.weatherData['sys']['country']}</span>
                </p>
                <h1 id="currentTemp">{props.weatherData['main']['temp']}°</h1>
                <p id="currentWeather">{props.weatherData['weather'][0]['main']}</p>
            </div>
            {/* <!-- COLUMN 2: weather, high, low, humidity, wind --> */}
            <div id="results-column" className="col-6">
                <p id="feelsLike">Feels like {props.weatherData['main']['feels_like']}°</p>
                <div id="stats">
                    <p id="highTemp">High: {props.weatherData['main']['temp_max']}°</p>
                    <p id="lowTemp">Low: {props.weatherData['main']['temp_min']}°</p>
                    <p id="humidity">Humidity: {props.weatherData['main']['humidity']}%</p>
                    <p id="wind">Wind: {props.weatherData['wind']['speed']} MPH</p>
                </div>
            </div>
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react'

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
            {/* <div className="row" style="color:white; padding: 50px; margin: 9% 10%; border: 2px solid white; border-radius: 15px; background-color:rgba(0, 0, 50, 0.40)">
            <!-- COLUMN 1: City, Temp, Feels Like -->
            <div className="col-6" style="">
                <p style="font-size:9vh">
                <!-- Content inserted by JS code -->
                <span id="city"></span>
                <span style="font-size:5vh; color:lightgray" id="country"></span>
                </p>
                <h1 style="font-size:15vh" id="currentTemp"></h1>
                <p style="font-size:6vh" id="currWeather"></p>
            </div>
            <!-- COLUMN 2: weather, high, low, humidity, wind -->
            <div className="col-6" style="padding: 0 0 0 5%">
                <p style="font-size:6vh; margin: 0 0 5vh 0;" id="feelsLike"></p>
                <p style="font-size:3.5vh;" id="highTemp"></p>
                <p style="font-size:3.5vh; margin: 0 0 5vh 0;" id="lowTemp"></p>
                <p style="font-size:3.5vh" id="humidity"></p>
                <p style="font-size:3.5vh" id="wind"></p>
            </div>
            </div> */}
            <div className="row">
            {/* <!-- COLUMN 1: City, Temp, Feels Like --> */}
            <div className="col-6" >
                <p>
                <span id="city">{props.weatherData['name']}</span>
                <span id="country">{props.weatherData['sys']['country']}</span>
                </p>
                <h1 id="currentTemp">{props.weatherData['main']['temp']}</h1>
                <p id="currWeather">{props.weatherData['weather'][0]['main']}</p>
            </div>
            {/* <!-- COLUMN 2: weather, high, low, humidity, wind --> */}
            <div className="col-6">
                <p id="feelsLike">{props.weatherData['main']['feels_like']}</p>
                <p id="highTemp">{props.weatherData['main']['temp_max']}</p>
                <p id="lowTemp">{props.weatherData['main']['temp_min']}</p>
                <p id="humidity">{props.weatherData['main']['humidity']}</p>
                <p id="wind">{props.weatherData['wind']['speed']} </p>
            </div>
            </div>
        </>
    )
}
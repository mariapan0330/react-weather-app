import React, { useState } from 'react';
import { apiKey } from '../key';


export default function QuickSearch(props) {
    const [cityInput, setCityInput] = useState('');
    const [errorMsg, setErrorMsg] = useState("")

    function handleCityInputChange(e) {
        setCityInput(e.target.value);
    }

    async function onSubmit(value){
        console.log("You submitted:", value)
        let weatherData = await props.getWeatherData(value)
        console.log(apiKey)
        console.log(weatherData)
        if (weatherData['cod'] >= '400') {
            let message = "Oops! That didn't work. Try double checking your spelling."
            console.log(message)
            setErrorMsg(message)
            props.setDisplayTheResults(false)
        } else {
            // console.log(weatherData)
            setErrorMsg("")
            console.log('got the weather data.');
            props.setWeather(weatherData['weather'][0]['main'].toLowerCase())
            props.setWeatherData(weatherData)
            props.setDisplayTheResults(true)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(cityInput);
        setCityInput("")
    }

    return (
        <>
        <form className="m-5 d-flex" onSubmit={handleSubmit}>
            <input
                className="form-control me-2 mt-2 px-3 py-2 fs-5"
                type="text"
                placeholder="Quick Search By City..."
                value={cityInput}
                onChange={handleCityInputChange}
            />
            <button className="btn btn-outline-warning me-2 mt-2 px-3 py-2 fs-5" type="submit">
                Search
            </button>
            <button className="btn btn-outline-light me-2 mt-2 px-3 py-2 fs-5" type="button" onClick={props.onAdvancedClick}>
                Advanced Search
                {/* TODO: currently inactive */}
            </button>
        </form>
        {errorMsg ? 
        <h2 className='text-center text-light fw-bold' style={
            {color: 'white',
            padding: '20px', 
            margin: '0 10%', 
            border: '2px solid black',
            borderRadius: '15px',
            backgroundColor: 'rgba(0,0,0, 0.5)'}}
            >{errorMsg}</h2>
        :
        <></>
        }
        </>
    );
}

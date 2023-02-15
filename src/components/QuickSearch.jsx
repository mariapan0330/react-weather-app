import React, { useState } from 'react';
import { apiKey } from '../key';


export default function QuickSearch(props) {
    const [cityInput, setCityInput] = useState('');

    function handleCityInputChange(e) {
        setCityInput(e.target.value);
    }

    async function onSubmit(value){
        console.log("You submitted:", value)
        let weatherData = await props.getWeatherData(value)
        console.log(apiKey)
        console.log(weatherData)
        if (weatherData['cod'] >= '400') {
            console.log("THERE WAS AN ERROR GETTING YOUR DATA")
        } else {
            // console.log(weatherData)
            console.log('got the weather data.');
            // buildInfoPage(weatherData)
        }
        props.setWeatherData(weatherData)
        props.setDisplayTheResults(true)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(cityInput);
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
            <button
                className="btn btn-outline-warning me-2 mt-2 px-3 py-2 fs-5"
                type="submit"
            >
                Search
            </button>
            <button
                className="btn btn-outline-light me-2 mt-2 px-3 py-2 fs-5"
                type="button"
                onClick={props.onAdvancedClick}
            >
                Advanced Search
            </button>
        </form>
        </>
    );
}

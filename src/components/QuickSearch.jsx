/**
 * This file contains the QuickSearch component of the weather app.
 * The search bar appears on the home screen and is a form with one field (city)
 * and two buttons - Search and Advanced Search. The Advanced Search button currently
 * doesn't do anything, but you can check my repository at https://github.com/mariapan0330/Responsive-Weather-App/blob/main/js/main.js
 * (starting at line 171) to see what the Advanced Search capabilities would look like. 
 * That project was the original version of this (done in vanilla JS.)
 * 
 */


import React, { useState } from 'react';


export default function QuickSearch(props) {
    const [cityInput, setCityInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [errorSubMsg, setErrorSubMsg] = useState('');

    function handleCityInputChange(e) {
        setCityInput(e.target.value);
    };

    async function onSubmit(value){
        console.log("You submitted:", value);
        let weatherData = await props.getWeatherData(value);
        // console.log(apiKey);
        // console.log(weatherData);

        if (weatherData['cod'] >= '400') {
            setErrorMsg("Oops! That didn't work.");
            setErrorSubMsg("Try double checking your spelling.");
            props.setDisplayTheResults(false);
        } else {
            // console.log(weatherData);
            setErrorMsg('');
            console.log('got the weather data.');
            props.setWeather(weatherData['weather'][0]['main'].toLowerCase());
            props.setWeatherData(weatherData);
            props.setDisplayTheResults(true);
        };
    };

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(cityInput); 
        setCityInput(''); // resets the search field
    };

    function onAdvancedClick() {
        setErrorMsg("Sorry, that button doesn't actually do anything yet.");
        setErrorSubMsg("I considered adding a RickRoll but am told that's unprofessional.");
    };

    return (
      <>
        <div className="container-fluid">
          <div className="row mx-5 mt-5">

              <form className="col-sm-12 col-md-10" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12 col-md-10">
                    <input
                      className="form-control p-4 fs-5"
                      type="text"
                      placeholder="Quick Search By City..."
                      value={cityInput}
                      onChange={handleCityInputChange}
                      />
                  </div>
                  <button className="col-sm-12 col-md-2 btn btn-outline-warning fs-4" type="submit">
                    Search
                  </button>
                </div>
              </form>
            
            <div className="col-sm-12 col-md-2">
              <button className="d-flex btn btn-outline-light p-4 fs-5" type="button" onClick={onAdvancedClick}>
                Advanced Search
                {/* TODO: currently inactive */}
              </button>
            </div>

          </div>
        </div>


        {errorMsg ? // this error message will only display if the value is not empty
        <>
        <h2 className='text-center text-light fw-bold mt-5' style={
          {color: 'white',
          padding: '20px', 
          margin: '0 10%', 
          border: '2px solid black',
          borderRadius: '15px',
          backgroundColor: 'rgba(0,0,0, 0.5)'}}
          >{errorMsg}
          <h4 className='pt-2'>{errorSubMsg}</h4>
          </h2>
        </>
        :
        <></> }
      </>
    );
};

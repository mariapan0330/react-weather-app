import Landing from "./components/Landing.jsx"
import './App.css'
import { apiKey } from './key.js'

async function getWeatherData(city, country, zip, lat, lon){
    console.log('Getting Weather Data...');

    // if zip code, call zip & country
    // if city, call city
    // if city and country, call city and country
    // if lat, call lat & lon
    let res;
    // latitude and longitude at the top bc it's the most specific.
    if (lat) {
        res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)

    } else if (city && !country){
        res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)

    } else if (city && country){
        res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`)
        
    } else if (zip){
        res = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}&units=imperial`)
    }

    let data = await res.json()
    
    if (zip){
        let zipCity = data['name']
        let zipCountry = data['country']
        res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zipCity},${zipCountry}&appid=${apiKey}&units=imperial`)
        data = await res.json()
    }
    
    return data
}

function App() {
    return (
        <>
        <div className="container my-container homepage">
            <Landing getWeatherData={getWeatherData}/>
        </div>
        </>
    );
}

export default App;

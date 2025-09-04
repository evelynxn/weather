import React,{useEffect, useRef, useState} from 'react'
import "./Weather.css"
import { search_icon, clear, cloud, drizzle, humidity, rain, snow, wind} from '../assets';

const Weather = () => {
    
    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);
   
    const allIcons = {
        '01d': clear,
        '01n': clear,
        '02d': cloud,
        '02n': cloud,
        '03d': cloud,
        '03n': cloud,
        '04d': drizzle,
        '04n': drizzle,
        '09d': rain,
        '09n': rain,
        '10d': rain,
        '10n': rain,
        '13d': snow,
        '13n': snow,
    }

    const search = async (city) => {

        if (city === ""){
            alert ("Enter City Name");
            return;


        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok){
                alert(data.message);
                return;
            }
            console.log(data);

            const icon = allIcons[data.weather[0].icon] || clear;

            setWeatherData ({
                humidity: data.main.humidity,
                windSpeed : data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })

        } catch (error){
            setWeatherData(False);
            console.error("Could not fetch weather data");
        }
        
    }
    useEffect(()=>{search("New York")},[])

  return (

    <div className ='weather'>
        <div className='search-bar'>
            <input ref = {inputRef} type = 'text' placeholder='Search'/>
            <img src={search_icon} alt="" onClick={()=> search(inputRef.current.value)} />
        </div>
        
        {weatherData?<>
            <img src= {weatherData.icon} alt="" className='weather-icon' />
        <p className='temperature '> {weatherData.temperature}</p>
        <p className='location'> {weatherData.location}</p>
        
        <div className='weather-data'>
            <div className ='column'>
                <img src={humidity} alt="" />
                <div>
                    <p>{weatherData.humidity}</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className='column'>
                <img src={wind} alt="" />
                <div>
                    <p>{weatherData.windSpeed} km/h</p>
                    <span>Wind</span>
                </div>
            </div>

        </div>
        </>:<></>}
    
    </div>
  )
}

export default Weather

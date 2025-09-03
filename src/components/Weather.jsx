import React from 'react'
import "./Weather.css"
import { search_icon, clear, cloud, drizzle, humidity, rain, snow, wind} from '../assets';

const Weather = () => {
    const search= async (city) => {
        try {
            const url =  `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${import.meta.env.VITE_APP_ID}`;

        } catch (error){

        }
        
    }



  return (

    <div className ='weather'>
       
        <div className='search-bar'>
            <input type = 'text' placeholder='Search'/>
            <img src={search_icon} alt="" />
        </div>

        <img src= {clear} alt="" className='weather-icon' />
        <p className='temperature '>16 degrees</p>
        <p className='location'> London</p>
        
        <div className='weather-data'>
            <div className='column'>
                <img src={humidity} alt="" />
                <div>
                    <p>91%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className='column'>
                <img src={wind} alt="" />
                <div>
                    <p>3.6km/h</p>
                    <span>Wind</span>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default Weather

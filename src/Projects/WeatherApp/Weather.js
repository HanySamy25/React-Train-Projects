import React, { useState } from 'react'
import './weather.css'
import Search from './Components/Search'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import { WEATHER_API_URL,WEATHER_API_KEY } from './Api'
import Forecast from './Components/ForeCast/ForeCast'


const Weather = () => {

  const [currentWeather,setCurrentWeather]=useState(null);
  const [forCast,setForCast]=useState(null);

  const handelOnSearchChange = (searchData)=>{
   const [lat,lon]=searchData.value.split("");

   const currentWeatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
   const forcastFetch=fetch(`${WEATHER_API_URL}/forcast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

   Promise.all([currentWeatherFetch,forcastFetch])
   .then(async(response)=>{
    const weaterResponse=await response[0].json();
    const forcastResponse=await response[1].json();
    setCurrentWeather({city:searchData.label,...weaterResponse});
    setForCast({city:searchData.label,...forcastResponse});
   })
   .catch((err)=>console.log(err))

  }



  return (
    <div className='weather-container'>
      <Search onSearchCahnge={handelOnSearchChange}/>
     {currentWeather&& <CurrentWeather data={currentWeather}/>}
     {forCast && <Forecast data={forCast} />}
    </div>
  )
}

export default Weather
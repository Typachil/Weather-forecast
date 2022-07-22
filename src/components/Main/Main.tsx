import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/redux';
import WeatherList from '../WeatherList/WeatherList';
import './main.scss'

export default function Main() {
    const { weatherCity, currentWeather, isLoading, error } = useAppSelector(state => state.weatherReducer);
    const description = currentWeather.weather[0].description;

    if (isLoading) {
        return (
            <Box className='loading'>
                <CircularProgress size={80} />
            </Box>
        )
    }
    return (
        <Box className="weather">
            <Box className="weather-wrapper">
                <Box className="weather-current">
                    <h1>{weatherCity.city.name}</h1>
                    <img src="img/Rain.png" alt="Weather" />
                    <div className="weather-current__description">{description.charAt(0).toUpperCase() + description.slice(1)}</div>
                    <Box className='weather-values'>
                        <div>
                            <img className='weather-values__icon' src="img/Temp.png" alt="Temp" />
                            {Math.round(currentWeather.main.temp)}&#8451;
                        </div>
                        <div>
                            <img className='weather-values__icon' src="img/Humidity.png" alt="Temp" />
                            {currentWeather.main.humidity}%
                        </div>
                        <div>
                            <img className='weather-values__icon' src="img/Air.png" alt="Temp" />
                            {Math.round(currentWeather.wind.speed)} m/c
                        </div>
                    </Box>
                </Box>
                <WeatherList/>
            </Box>
        </Box>
    )
}

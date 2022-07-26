import { Box, CircularProgress, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/redux';
import WeatherList from '../WeatherList/WeatherList';
import './main.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CitiesDrawer from '../CitiesDrawer/CitiesDrawer';

export default function Main() {
    const { weatherCity, currentWeather, isLoading, error } = useAppSelector(state => state.weatherReducer);
    const description = currentWeather.weather[0].description;
    const { ui } = useAppSelector(state => state.UiReducer);
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setShowDrawer(open);
            };

    if (isLoading) {
        return (
            <Box className='loading'>
                <CircularProgress size={80} />
            </Box>
        )
    }

    function getTime(date: string | number): number {
        date = new Date(date).getHours();
        return date;
    }

    return (
        <Box className="weather">
            {ui.mobile && <>
                <IconButton className="weather-iconList" sx={{ position: "absolute" }} onClick={toggleDrawer(true)}>
                    <FormatListBulletedIcon sx={{ height: "5vmax", width: "5vmax" }} />
                </IconButton>
                <CitiesDrawer showDrawer={showDrawer} setShowDrawer={toggleDrawer} />
            </>}
            <Box className="weather-wrapper">
                <Box className="weather-current">
                    <h1>{weatherCity.city.name}</h1>
                    <h2>{getTime(currentWeather.dt_txt)}:00</h2>
                    <img src={`img/${currentWeather.weather[0].main}.png`} alt="Weather" />
                    <div className="weather-current__description">{description.charAt(0).toUpperCase() + description.slice(1)}</div>
                    <Box className='weather-values'>
                        <div>
                            <img className='weather-values__icon' src="img/Temp.png" alt="Temp" />
                            {Math.round(currentWeather.main.temp)}&#8451;
                        </div>
                        <div>
                            <img className='weather-values__icon' src="img/Humidity.png" alt="Humidity" />
                            {currentWeather.main.humidity}%
                        </div>
                        <div>
                            <img className='weather-values__icon' src="img/Air.png" alt="Air" />
                            {Math.round(currentWeather.wind.speed)} m/c
                        </div>
                    </Box>
                </Box>
                <WeatherList />
            </Box>
        </Box>
    )
}

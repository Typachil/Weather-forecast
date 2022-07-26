import { Box } from '@mui/material';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IWeather } from '../../models/IWeather';
import { setCurrentWeather } from '../../store/reducers/WeatherSlice';
import './weatherList.scss'

export default function WeatherList() {
    const dispatch = useAppDispatch();
    const { weatherCity, isLoading, error } = useAppSelector(state => state.weatherReducer);

    function getDay(date: string | Date): string {
        date = new Date(date);
        const dateFormating: string = new Intl.DateTimeFormat('ru-RU', { weekday: "long" }).format(date);
        return dateFormating.charAt(0).toUpperCase() + dateFormating.slice(1);
    }

    function getTime(date: string | number): number {
        date = new Date(date).getHours();
        return date;
    }

    function changeCurrentWeather(weather: IWeather){
        dispatch(setCurrentWeather(weather))
    }

    return (
        <Box sx={{marginTop: '30px'}}>
            <Box className="weather-list__header">Следующие 24 часа</Box>
            <Box className="weather-list">
                {weatherCity.list.map(item => {
                    return (
                        <div onClick={() => changeCurrentWeather(item)} className="weather-list__element" key={item.dt}>
                            <div>{getDay(item.dt_txt)}</div>
                            <div>{getTime(item.dt_txt)}:00</div>
                            <img className='weather-list__icon' src={`img/${item.weather[0].main}.png`} alt="Weather" />
                            <div className='weather-list__temp'>{Math.round(item.main.temp)}&#8451;</div>
                        </div>
                    )
                })}
            </Box>
        </Box>
    )
}

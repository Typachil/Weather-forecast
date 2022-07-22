import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IWeatherCity } from "../../models/IWeather";


interface paramsWeather{
    lat: number,
    lon: number,
    cnt: number
}

export const fetchWeather = createAsyncThunk<IWeatherCity, paramsWeather>(
    'weather/fetch',
    async (userData, {rejectWithValue}) => {
        const {lat, lon, cnt} = userData;
        try {
            const response = await axios.get<IWeatherCity>('http://localhost:5000/weather', {params : {lat, lon, cnt}});
            return response.data
        }catch(e){
            return rejectWithValue("Не удалось загрузить погоду")
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IWeatherCity } from "../../models/IWeather";


interface paramsWeather{
    id: number,
    cnt?: number
}

const appid = '89a0c226c453b01c1b833d24beb61e8c';

export const fetchWeather = createAsyncThunk<IWeatherCity, paramsWeather>(
    'weather/fetch',
    async ({id, cnt = 8}, {rejectWithValue}) => {
        try {
            const response = await axios.get<IWeatherCity>('https://api.openweathermap.org/data/2.5/forecast', 
                {params : {id, cnt, appid, lang:'ru', units:'metric'}}
            );
            return response.data
        }catch(e){
            return rejectWithValue("Не удалось загрузить погоду")
        }
    }
)
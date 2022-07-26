import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather, IWeatherCity } from "../../models/IWeather";
import { fetchWeather } from "./ActionCreators";


interface WeatherState {
    weatherCity: IWeatherCity;
    isLoading: boolean;
    error: string;
    currentWeather: IWeather;
}

const initialState: WeatherState = {
    weatherCity: {
        cnt: 8,
        list: [],
        city: {
            id: 0,
            name: "",
            coord: {lat: 0,lon: 0}
        }
    },
    isLoading: false,
    error: "",
    currentWeather: {
        dt: 0,
        main: {temp: 0, humidity: 0},
        weather: [
            {main: "",description: "",}
        ],
        wind: {speed: 0},
        dt_txt: ""
    }
}

const WeatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCurrentWeather(state, action: PayloadAction<IWeather>) {
            state.currentWeather = state.weatherCity.list.find(item => item.dt === action.payload.dt)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                state.weatherCity = action.payload;
                state.currentWeather = action.payload.list[0];
                state.error = "";
            }).
            addCase(fetchWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false
            })
    }
})

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
};

export const {setCurrentWeather} = WeatherSlice.actions;
export default WeatherSlice.reducer;
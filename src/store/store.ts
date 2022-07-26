import { combineReducers, configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./reducers/WeatherSlice";
import UiReducer from "./reducers/UiSlice";

const rootReducer = combineReducers({
    weatherReducer,
    UiReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
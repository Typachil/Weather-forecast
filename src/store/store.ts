import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postApi } from "../services/PostService";
import { userApi } from "../services/UserService";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
    userReducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postApi.middleware, userApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
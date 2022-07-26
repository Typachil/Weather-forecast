import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const breakpoints = {
    mobile: 700
}

interface initialState{
    ui: {
        mobile: boolean;
    }
}

const initialState = {
    ui: {
        mobile: false
    }
}

const UiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
       setUIMobile(state, action: PayloadAction<number>){
        state.ui.mobile = action.payload <= breakpoints.mobile
       }
    }
})

export const {setUIMobile} = UiSlice.actions;
export default UiSlice.reducer;


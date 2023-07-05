import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers:{
        increase: (state, action) => {
            state.counter += 1;
        },
        decrease: (state, action) => {
            state.counter -= 1;
        },
        setCount:(state, action) => {
            state.counter = action.payload;
        }
    },
});

export const {increase, decrease, setCount } = counterSlice.actions;

export default counterSlice.reducer;
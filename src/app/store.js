import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import crudReducer from './crudSlice'; 

export const store = configureStore({
    reducer:{
        counterReducer,
        crudReducer
    }
});
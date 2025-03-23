import { configureStore } from "@reduxjs/toolkit";
import formState from './authFormStateSlice'

export const store = configureStore({
    reducer:{
        formState,
    }
})

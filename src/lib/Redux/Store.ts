import { configureStore } from "@reduxjs/toolkit";
import formState from './authFormStateSlice'
import sidebarWidth from './sidebar'

export const store = configureStore({
    reducer:{
        formState,
        sidebarWidth,
    }
})

import { configureStore } from "@reduxjs/toolkit";
import resumeFillingSlice from "./user-info-slice";


const store=configureStore({
    reducer:{
        resume:resumeFillingSlice.reducer
    }
})

export default store;
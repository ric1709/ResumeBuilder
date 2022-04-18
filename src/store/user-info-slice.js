import {  createSlice } from '@reduxjs/toolkit'

const initState={
}

const resumeFillingSlice=createSlice({
    name:'filling',
    initialState:initState,
    reducers:{}
})

export const resumeActions=resumeFillingSlice.actions;
export default resumeFillingSlice;
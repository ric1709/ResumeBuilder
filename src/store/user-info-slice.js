import {  createSlice } from '@reduxjs/toolkit'

const initState={
    contact:{},
    education:[],
    experience:[],
    skills:[],
    summary:[]
}

const resumeFillingSlice=createSlice({
    name:'filling',
    initialState:initState,
    reducers:{
        contacts(state,action){
            state.contact=action.payload
        },
        educationInfo(state,action){
            state.education.push(action.payload)
            console.log(state.contact);
        },
        experienceInfo(state,action){
            state.experience.push(action.payload)
        },
        skills(state,action){
            state.skills.push(action.payload)
        },
        summary(state,action){
            state.summary.push(action.payload)
        }
    }
})

export const resumeActions=resumeFillingSlice.actions;
export default resumeFillingSlice;
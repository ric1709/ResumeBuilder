import { createSlice } from '@reduxjs/toolkit'

const initState = {
	contact: {},
	education: [],
	experience: [],
	skills: [],
	summary: [],
}
const resumeData = localStorage.getItem('@resume-data')
? JSON.parse(localStorage.getItem('@resume-data'))
: initState

const resumeFillingSlice = createSlice({
	name: 'filling',
	initialState: resumeData,
	reducers: {
		contacts(state, action) {
			state.contact = action.payload
		},
		educationInfo(state, action) {
			state.education.push(action.payload)
		},
		experienceInfo(state, action) {
			state.experience.push(action.payload)
		},
		skills(state, action) {
			state.skills.push(action.payload)
		},
		summary(state, action) {
			state.summary.push(action.payload)
		},
	},
})

export const resumeActions = resumeFillingSlice.actions
export default resumeFillingSlice

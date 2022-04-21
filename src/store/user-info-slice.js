import { createSlice } from '@reduxjs/toolkit'

const initState = {
	contact: {},
	education: {},
	extraEducation: [],
	experience: {},
	extraExperience: [],
	skills: [],
	summary: {},
	id:''
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
			state.education = action.payload
		},
		extraEducation(state, action) {
			const index = state.extraEducation.findIndex(
				(el) => el.id === action.payload.id,
			)
			if (index) {
				if (
					action.payload.school &&
					action.payload.city &&
					action.payload.date &&
					action.payload.degree &&
					action.payload.fieldOfStudy
				) {
					state.extraEducation.push(action.payload)
				}
			} else {
				state.extraEducation.map((el) => {
					if (el.id !== action.payload.id) {
						if (
							action.payload.school &&
							action.payload.city &&
							action.payload.date &&
							action.payload.degree &&
							action.payload.fieldOfStudy
						) {
							state.extraEducation.push(action.payload)
						} else {
							return state.extraEducation
						}
					}
				})
			}
		},
		editEducaion(state,action){
			state.extraEducation=state.extraEducation.map(el=>el.id === action.payload.id ? action.payload : el)
		},
		experienceInfo(state, action) {
			state.experience = action.payload
		},
		extraExperience(state, action) {
			const index = state.extraExperience.findIndex(
				(el) => el.id === action.payload.id,
			)
			if (index) {
				if (
					action.payload.title &&
					action.payload.city &&
					action.payload.employer &&
					action.payload.startDate &&
					action.payload.endDate
				) {
					state.extraExperience.push(action.payload)
				} 
			} else {
				state.extraExperience.map((el) => {
					if (el.id !== action.payload.id) {
						if (
							action.payload.title &&
							action.payload.city &&
							action.payload.employer &&
							action.payload.startDate &&
							action.payload.endDate
						) {
							state.extraExperience.push(action.payload)
						} else {
							return state.extraExperience
						}
					}
				})
			}
		},
		skills(state, action) {
			if (action.payload.skill) {
				state.skills.push(action.payload)
			}
		},
		summary(state, action) {
			state.summary = action.payload
		},
		removeExtraEducaion(state,action){
			state.extraEducation=state.extraEducation.filter(edu=>edu.id !== action.payload)
		},
		edit(state,action){
			state.id=action.payload
		}
	},
})

export const resumeActions = resumeFillingSlice.actions
export default resumeFillingSlice

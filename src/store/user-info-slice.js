import { createSlice } from '@reduxjs/toolkit'

const initState = {
	contact: {},
	education: {},
	extraEducation: [],
	experience: {},
	extraExperience: [],
	skills: [],
	summary: {},
	id: '',
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
		editEducaion(state, action) {
			state.extraEducation = state.extraEducation.map((el) =>
				el.id === action.payload.id ? action.payload : el,
			)
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
		editExperience(state, action) {
			state.extraExperience = state.extraExperience.map((el) =>
				el.id === action.payload.id ? action.payload : el,
			)
		},
		skills(state, action) {
			const newSkill = {
				skill: action.payload,
				id: Date.now().toString(),
			}
			if (action.payload) {
				state.skills.push(newSkill)
			}
		},
		editSkills(state, action) {
			state.skills = state.skills.map((el) =>
				el.id === action.payload.id ? action.payload : el,
			)
		},
		summary(state, action) {
			state.summary = action.payload
		},
		removeExtraEducaion(state, action) {
			state.extraEducation = state.extraEducation.filter(
				(edu) => edu.id !== action.payload,
			)
		},
		edit(state, action) {
			state.id = action.payload
		},
		removeExtraExperience(state, action) {
			state.extraExperience = state.extraExperience.filter(
				(el) => el.id !== action.payload,
			)
		},
		removeSkills(state, action) {
			state.skills = state.skills.filter((el) => el.id !== action.payload)
		},
		newResume(state) {
			state.contact = {}
			state.education = {}
			state.extraEducation = []
			state.experience = {}
			state.extraExperience = []
			state.skills = []
			state.summary = {}
		},
	},
})

export const resumeActions = resumeFillingSlice.actions
export default resumeFillingSlice

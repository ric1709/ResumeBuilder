import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './ExperienceForm.css'

function ExperienceForm() {
	const changePage=useChangePage()
	const dispatch = useDispatch()
	const debouncedCallback=useDebounce(sendExperienceDataToStore,800)
	const {title,employer,city,country,startDate,endDate}=useSelector(state=>state.resume.experience)
	const experience = useInput({
		title:title|| '',
		employer:employer|| '',
		city:city|| '',
		country:country|| '',
		startDate:startDate|| '',
		endDate: endDate||'',
		id: Math.random().toString(),
	})
	const [showCountry, setShowCountry] = useState(false)

	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
	function sendExperienceDataToStore(){
		return	dispatch(resumeActions.experienceInfo(experience.value))
	}
	useEffect(() => {
		debouncedCallback()
	}, [debouncedCallback]);
	return (
		<div className='main-funnel'>
			<h1 className='h1'>Work Experience</h1>
			<p className='p'>Start with your most recent work experience.</p>
			<div className='experience-input-div'>
				<label>Job Title</label>
				<input
					type='text'
					className='experience-input'
					maxLength='25'
					name='title'
					value={experience.value.title}
					onChange={experience.onChange}
				/>
			</div>
			<div className='experience-input-div'>
				<label>Employer</label>
				<input
					type='text'
					className='experience-input'
					name='employer'
					value={experience.value.employer}
					onChange={experience.onChange}
				/>
			</div>
			<div className='experience-input-div'>
				<label>City</label>
				<input
					type='text'
					className='experience-input group'
					name='city'
					value={experience.value.city}
					onChange={experience.onChange}
				/>
			</div>
			{showCountry && (
				<div className='experience-input-div'>
					<label>Country</label>
					<input
						type='text'
						className='experience-input'
						name='country'
						value={experience.value.country}
						onChange={experience.onChange}
					/>
				</div>
			)}
			<div className='show-country'>
				<input type='checkbox' onClick={showCountryHandler} />
				<label>
					<b>Show Country</b>
				</label>
			</div>
			<div>
				<div className='end-date'>
					<label>Start Date</label>
					<input
						type='date'
						className='experience-input date'
						name='startDate'
						value={experience.value.startDate}
						onChange={experience.onChange}
					/>
				</div>
				<div className='end-date'>
					<label>End Date</label>
					<input
						type='date'
						className='experience-input date'
						name='endDate'
						value={experience.value.endDate}
						onChange={experience.onChange}
					/>
				</div>
			</div>
			<div className='additional-btn-div'>
				<button className='add-btn' onClick={changePage('/add-experience')}>
					+ADD ANOTHER EXPERIENCE
				</button>
			</div>
			<div className='btn'>
				<Button className='back'>BACK</Button>
				<Button className='next' onClick={changePage('/skills')}>
					CONTINUE
				</Button>
			</div>
		</div>
	)
}

export default ExperienceForm

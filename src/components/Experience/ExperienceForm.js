import React, { useState } from 'react'
import useInput from '../../hooks/useInput'
import Button from '../../UI/Button/Button'
import './ExperienceForm.css'

function ExperienceForm() {
	const experience=useInput({
		title:'',
		employer:'',
		city:'',
		country:'',
		startDate:'',
		endDate:''
	})

	const [showCountry,setShowCountry]=useState(false)

	const showCountryHandler=()=>{
		setShowCountry(prevState=>!prevState)
	}
	return (
		<div className='main-funnel'>
			<h1 className='h1'>Work Experience</h1>
			<p className='p'>Start with your most recent work experience.</p>
			<div className='experience-input-div'>
				<label>Job Title</label>
				<input
					type='text'
					className='experience-input'
					maxLength='15'
					name='title'
					value={experience.value.title}
					onChange={experience.onChange}
				/>
			</div>
			<div className='experience-input-div'>
				<label>Employer</label>
				<input type='text' className='experience-input' name='employer' value={experience.value.employer} onChange={experience.onChange}/>
			</div>
			<div className='experience-input-div'>
				<label>City</label>
				<input type='text' className='experience-input group'  name='city' value={experience.value.city} onChange={experience.onChange}/>
			</div>
			{showCountry && <div className='experience-input-div'>
				<label>Country</label>
				<input type='text' className='experience-input'  name='country' value={experience.value.country} onChange={experience.onChange}/>
			</div>}
			<div className='show-country'>
				<input type='checkbox'  onClick={showCountryHandler}/>
				<label>
					<b>Show Country</b>
				</label>
			</div>
			<div>
				<div className='end-date'>
					<label>Start Date</label>
					<input type='date' className='experience-input date'  name='startDate' value={experience.value.startDate} onChange={experience.onChange}/>
				</div>
				<div className='end-date'>
					<label>End Date</label>
					<input type='date' className='experience-input date'  name='endDate' value={experience.value.endDate} onChange={experience.onChange}/>
				</div>
				<div className='work-position'>
					<input type='checkbox' />
					<label>
						<b>I currently work here</b>
					</label>
				</div>
			</div>
			<div className='btn'>
				<Button className='back'>BACK</Button>
				<Button className='next'>CONTINUE</Button>
			</div>
		</div>
	)
}

export default ExperienceForm

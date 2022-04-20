import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useChangePage from '../../hooks/useChangePage';
import useDebounce from '../../hooks/useDebounce';
import useInput from '../../hooks/useInput';
import { resumeActions } from '../../store/user-info-slice';
import Button from '../../UI/Button/Button';
import './AdditionalExperience.css'

function AdditionalExperience() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const debouncedCallback=useDebounce(onSaveExperienceDataToStore,1000)
    const [showCountry,setShowCountry]=useState(false)
    const {extraExperience}=useSelector(state=>state.resume)
    // console.log(extraExperience);
    const experience=useInput({
        title: '',
		employer:'',
		city:'',
		country:'',
		startDate:'',
		endDate: '',
		id: Math.random().toString(),
    })
    function onSaveExperienceDataToStore(){
		return dispatch(resumeActions.extraExperience(experience.value))
    }
    const showCountryHandler=()=>{
        setShowCountry(prevState=>!prevState)
    }
    const onSaveExperienceDataToStoreHandler=()=>{
        debouncedCallback()
        navigate('/experience')
    }
    return (
        <div className='main-funnel'>
			<h1 className='h1'>Work Experience</h1>
			<p className='p'>Start with your most recent work experience.</p>
			<div className='add-experience-input-div'>
				<label>Job Title</label>
				<input
					type='text'
					className='add-experience-input'
					maxLength='25'
					name='title'
					value={experience.value.title}
					onChange={experience.onChange}
				/>
			</div>
			<div className='add-experience-input-div'>
				<label>Employer</label>
				<input
					type='text'
					className='add-experience-input'
					name='employer'
					value={experience.value.employer}
					onChange={experience.onChange}
				/>
			</div>
			<div className='add-experience-input-div'>
				<label>City</label>
				<input
					type='text'
					className='add-experience-input group'
					name='city'
					value={experience.value.city}
					onChange={experience.onChange}
				/>
			</div>
			{showCountry && (
				<div className='add-experience-input-div'>
					<label>Country</label>
					<input
						type='text'
						className='add-experience-input'
						name='country'
						value={experience.value.country}
						onChange={experience.onChange}
					/>
				</div>
			)}
			<div className='add-show-country'>
				<input type='checkbox' onClick={showCountryHandler} />
				<label>
					<b>Show Country</b>
				</label>
			</div>
			<div>
				<div className='add-end-date'>
					<label>Start Date</label>
					<input
						type='date'
						className='add-experience-input date'
						name='startDate'
						value={experience.value.startDate}
						onChange={experience.onChange}
					/>
				</div>
				<div className='add-end-date'>
					<label>End Date</label>
					<input
						type='date'
						className='add-experience-input date'
						name='endDate'
						value={experience.value.endDate}
						onChange={experience.onChange}
					/>
				</div>
			</div>
			<div className='btn'>
				<Button className='back'>CENCEL</Button>
				<Button className='next' onClick={onSaveExperienceDataToStoreHandler}>
					SAVE
				</Button>
			</div>
		</div>
    );
}

export default AdditionalExperience;
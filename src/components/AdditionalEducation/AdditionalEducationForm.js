import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import { DEGREES } from '../../utils/constants/general'
import './AdditionalEducationForm.css'

function AdditionalEducationForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const debouncedCallback = useDebounce(onSaveDataToStore, 800)
	const changePage = useChangePage()
	const [showCountry, setShowCountry] = useState(false)
	const edu = useInput({
		school:'',
		city:'',
		country:'',
		degree:'',
		fieldOfStudy:'',
		date:'',
		id:Date.now().toString(),
	})

	function onSaveDataToStore() {
		return dispatch(resumeActions.extraEducation(edu.value))
	}
	const onSaveDataToStoreHandler = () => {
		debouncedCallback()
		navigate('/education',{replace:true})
	}
	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
	return (
		<div className='main-funnel'>
			<h1 className='h1'>Education</h1>
			<p className='p'>Where did you go to school?</p>
			<div className='add-education-input-div'>
				<label>School Name</label>
				<input
					type='text'
					className='add-education-input'
					maxLength='15'
					name='school'
					value={edu.value.school}
					onChange={edu.onChange}
				/>
			</div>
			<div className='add-education-input-div'>
				<label>City</label>
				<input
					type='text'
					className='add-education-input group'
					name='city'
					value={edu.value.city}
					onChange={edu.onChange}
				/>
			</div>
			{showCountry && (
				<div className='add-education-input-div'>
					<label>Country</label>
					<input
						type='text'
						className='add-education-input'
						name='country'
						value={edu.value.country}
						onChange={edu.onChange}
					/>
				</div>
			)}
			<div className='add-show-country'>
				<input type='checkbox' onClick={showCountryHandler} />
				<label>
					<b>Show Country</b>
				</label>
			</div>
			<div className='add-education-input-div select'>
				<label>Degree</label>
				<select
					className='add-education-select'
					name='degree'
					value={edu.value.degree}
					onChange={edu.onChange}
				>
					<option value='' key='1'>
						Select Your Degree
					</option>
					<option value='High School Diploma' key='2'>
						High School Diploma
					</option>
					{DEGREES.map((degree) => (
						<option value={degree} key={Math.random()}>
							{degree}
						</option>
					))}
				</select>
			</div>
			<div className='add-education-input-div'>
				<label>Field of study</label>
				<input
					type='text'
					className='add-education-input'
					name='fieldOfStudy'
					value={edu.value.fieldOfStudy}
					onChange={edu.onChange}
				/>
			</div>
			<div>
				<div className='add-start-date'>
					<label className='label'>Graduation Date</label>
					<input
						type='date'
						className='add-education-input date'
						name='date'
						value={edu.value.date}
						onChange={edu.onChange}
					/>
				</div>
			</div>
			<div className='btn'>
				<Button className='back' onClick={changePage('/education',true)}>
					CANCEL
				</Button>
				<Button className='next' onClick={onSaveDataToStoreHandler}>
					SAVE
				</Button>
			</div>
		</div>
	)
}

export default AdditionalEducationForm

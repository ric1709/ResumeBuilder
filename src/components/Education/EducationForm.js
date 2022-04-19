import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './EducationForm.css'

function EducationForm() {
	const dispatch=useDispatch()
	const changePage=useChangePage()
	const debouncedCallback=useDebounce(sendEducationDataToStore,800)
	const {education}=useSelector(state=>state.resume)
	
	const [showCountry, setShowCountry] = useState(false)

	const {school,city,country,degree,fieldOfStudy,date}=education
	const edu = useInput({
		school:school|| '',
		city:city|| '',
		country:country|| '',
		degree: degree||'',
		fieldOfStudy:fieldOfStudy|| '',
		date: date||'',
		id:Math.random().toString()
	})
	
	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
	function sendEducationDataToStore(){
		return dispatch(resumeActions.educationInfo(edu.value))
	}
	useEffect(()=>{
		debouncedCallback()
	},[debouncedCallback])
	return (
		<div className='main-funnel'>
			<h1 className='h1'>Education</h1>
			<p className='p'>Where did you go to school?</p>
			<div className='education-input-div'>
				<label>School Name</label>
				<input
					type='text'
					className='education-input'
					maxLength='15'
					name='school'
					value={edu.value.school}
					onChange={edu.onChange}
				/>
			</div>
			<div className='education-input-div'>
				<label>City</label>
				<input
					type='text'
					className='education-input group'
					name='city'
					value={edu.value.city}
					onChange={edu.onChange}
				/>
			</div>
			{showCountry && (
				<div className='education-input-div'>
					<label>Country</label>
					<input
						type='text'
						className='education-input'
						name='country'
						value={edu.value.country}
						onChange={edu.onChange}
					/>
				</div>
			)}
			<div className='show-country'>
				<input type='checkbox' onClick={showCountryHandler} />
				<label>
					<b>Show Country</b>
				</label>
			</div>
			<div className='education-input-div select'>
				<label>Degree</label>
				<select
					className='education-select'
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
					<option value='BBA' key='3'>
						BBA
					</option>
					<option value='MBA' key='4'>
						MBA
					</option>
					<option value='J.D' key='5'>
						J.D
					</option>
					<option value='Ph.D' key='6'>
						Ph.D
					</option>
					<option value='Bachelor of Science' key='7'>
						Bachelor of Science
					</option>
				</select>
			</div>
			<div className='education-input-div'>
				<label>Field of study</label>
				<input
					type='text'
					className='education-input'
					name='fieldOfStudy'
					value={edu.value.fieldOfStudy}
					onChange={edu.onChange}
				/>
			</div>
			<div>
				<div className='start-date'>
					<label className='label'>Graduation Date</label>
					<input
						type='date'
						className='education-input date'
						name='date'
						value={edu.value.date}
						onChange={edu.onChange}
					/>
				</div>
			</div>
			<div className='btn'>
				<Button className='back'>BACK</Button>
				<Button className='next' onClick={changePage('/experience')}>
					CONTINUE
				</Button>
			</div>
		</div>
	)
}

export default EducationForm

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import { DEGREES } from '../../utils/constants/general'
import EditEducation from '../Edit/EditEducation/EditEducation'
import './EducationForm.css'

function EducationForm({editModal}) {
	const dispatch = useDispatch()
	const changePage = useChangePage()
	const debouncedCallback = useDebounce(sendEducationDataToStore, 800)
	const { education, extraEducation } = useSelector((state) => state.resume)
	const { school, city, country, degree, fieldOfStudy, date } = education
	const edu = useInput({
		school: school || '',
		city: city || '',
		country: country || '',
		degree: degree || '',
		fieldOfStudy: fieldOfStudy || '',
		date: date || '',
		id: Date.now().toString(),
	})

	const [showCountry, setShowCountry] = useState(false)
	const [showEdit, setShowEdit] = useState(false)
	const [showEditModal,setShowEditModal]=useState(false)

	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
	function sendEducationDataToStore() {
		return dispatch(resumeActions.educationInfo(edu.value))
	}
	const callEditModal=()=>{
		editModal(showEditModal)
		setShowEditModal(prevState=>!prevState)
	}
	useEffect(() => {
		debouncedCallback()
	}, [debouncedCallback])
	useEffect(() => {
		if (extraEducation.length) {
			setShowEdit(true)
		} else {
			setShowEdit(false)
		}
	}, [extraEducation])

	return (
		<div className='main-funnel'>
			<h1 className='h1'>Education</h1>
			<div className='intro-div'>
				<p className='p'>Where did you go to school?</p>
				{showEdit && (
					<button className='edit-button' onClick={callEditModal}>
						<b>EDIT</b>
					</button>
				)}
			</div>
			{showEditModal && ReactDOM.createPortal(<div className="backdrop"></div>,document.getElementById('backdrop'))}
			{showEditModal && ReactDOM.createPortal(<EditEducation onCloseModal={callEditModal}/>,document.getElementById('modal'))}
			<div className='education-input-div'>
				<label>School Name</label>
				<input
					type='text'
					className='education-input'
					maxLength='35'
					name='school'
					value={edu.value.school}
					onChange={edu.onChange}
				/>
			</div>
			<div className='education-input-div'>
				<label>City</label>
				<input
					type='text'
					maxLength='25'
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
						maxLength='25'
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
					maxLength='25'
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
					{DEGREES.map((degree) => (
						<option value={degree} key={Math.random()}>
							{degree}
						</option>
					))}
				</select>
			</div>
			<div className='education-input-div'>
				<label>Field of study</label>
				<input
					type='text'
					maxLength='25'
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
			<div className='additional-btn-div'>
				<button className='add-btn' onClick={changePage('/addEdu')}>
					+ADD ANOTHER EDUCATION
				</button>
			</div>
			<div className='btn'>
				<Button className='back' onClick={changePage('/experience')}>BACK</Button>
				<Button className='next' onClick={changePage('/resume')}>
					CONTINUE
				</Button>
			</div>
		</div>
	)
}

export default EducationForm

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import EditExperienceModal from '../Edit/EditExperience/EditExperienceModal'
import './ExperienceForm.css'

function ExperienceForm({editModal}) {
	const changePage = useChangePage()
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(sendExperienceDataToStore, 800)
	const { experience, extraExperience } = useSelector((state) => state.resume)
	const { title, employer, city, country, startDate, endDate } = experience
	const { value, onChange } = useInput({
		title: title || '',
		employer: employer || '',
		city: city || '',
		country: country || '',
		startDate: startDate || '',
		endDate: endDate || '',
		id: Date.now().toString(),
	})
	const [showCountry, setShowCountry] = useState(false)
	const [showEdit, setShowEdit] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)

	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
	function sendExperienceDataToStore() {
		return dispatch(resumeActions.experienceInfo(value))
	}
	const callEditModal = () => {
		editModal(showEditModal)
		setShowEditModal((prevState) => !prevState)
	}
	useEffect(() => {
		debouncedCallback()
	}, [debouncedCallback])

	useEffect(() => {
		if (extraExperience.length) {
			setShowEdit(true)
		} else {
			setShowEdit(false)
		}
	}, [extraExperience])

	return (
		<>
			<div className='main-funnel'>
				<h1 className='h1'>Work Experience</h1>
				<div className='edit-div'>
					<p className='p'>
						Start with your most recent work experience.
					</p>
					{showEdit && (
						<button className='edit-button' onClick={callEditModal}>
							<b>EDIT</b>
						</button>
					)}
				</div>
				<div className='experience-input-div'>
					<label>Job Title</label>
					<input
						type='text'
						className='experience-input'
						maxLength='25'
						name='title'
						value={value.title}
						onChange={onChange}
					/>
				</div>
				<div className='experience-input-div'>
					<label>Employer</label>
					<input
						type='text'
						className='experience-input'
						maxLength='25'
						name='employer'
						value={value.employer}
						onChange={onChange}
					/>
				</div>
				<div className='experience-input-div'>
					<label>City</label>
					<input
						type='text'
						className='experience-input group'
						maxLength='25'
						name='city'
						value={value.city}
						onChange={onChange}
					/>
				</div>
				{showCountry && (
					<div className='experience-input-div'>
						<label>Country</label>
						<input
							type='text'
							className='experience-input'
							maxLength='25'
							name='country'
							value={value.country}
							onChange={onChange}
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
							value={value.startDate}
							onChange={onChange}
						/>
					</div>
					<div className='end-date'>
						<label>End Date</label>
						<input
							type='date'
							className='experience-input date'
							name='endDate'
							value={value.endDate}
							onChange={onChange}
						/>
					</div>
				</div>
				<div className='additional-btn-div'>
					<button
						className='add-btn'
						onClick={changePage('/add-experience')}
					>
						+ADD ANOTHER EXPERIENCE
					</button>
				</div>
				<div className='btn'>
					<Button className='back' onClick={changePage('/skills')}>BACK</Button>
					<Button className='next' onClick={changePage('/education')}>
						CONTINUE
					</Button>
				</div>
			</div>

			{showEditModal &&
				ReactDOM.createPortal(
					<div className='backdrop'></div>,
					document.getElementById('backdrop'),
				)}
			{showEditModal &&
				ReactDOM.createPortal(
					<EditExperienceModal onCloseModal={callEditModal} />,
					document.getElementById('modal'),
				)}
		</>
	)
}

export default ExperienceForm

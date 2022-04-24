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
import {useTranslation} from 'react-i18next'

function ExperienceForm({editModal}) {
	const changePage = useChangePage()
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(sendExperienceDataToStore, 800)
	const {t}=useTranslation()
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
				<h1 className='h1'>{t('exp')}</h1>
				<div className='edit-div'>
					<p className='p'>
						{t('expP')}
					</p>
					{showEdit && (
						<button className='edit-button' onClick={callEditModal}>
							<b>{t('edit')}</b>
						</button>
					)}
				</div>
				<div className='experience-input-div'>
					<label>{t('title')}</label>
					<input
						type='text'
						className='experience-input'
						maxLength='45'
						name='title'
						value={value.title}
						onChange={onChange}
					/>
				</div>
				<div className='experience-input-div'>
					<label>{t('emp')}</label>
					<input
						type='text'
						className='experience-input'
						maxLength='45'
						name='employer'
						value={value.employer}
						onChange={onChange}
					/>
				</div>
				<div className='experience-input-div'>
					<label>{t('city')}</label>
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
						<label>{t('country')}</label>
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
						<b>{t('showC')}</b>
					</label>
				</div>
				<div>
					<div className='end-date'>
						<label>{t('sDate')}</label>
						<input
							type='date'
							className='experience-input date'
							name='startDate'
							value={value.startDate}
							onChange={onChange}
						/>
					</div>
					<div className='end-date'>
						<label>{t('eDate')}</label>
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
						{t('addAE')}
					</button>
				</div>
				<div className='btn'>
					<Button className='back' onClick={changePage('/skills')}>{t('back')}</Button>
					<Button className='next' onClick={changePage('/education')}>
						{t('continue')}
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

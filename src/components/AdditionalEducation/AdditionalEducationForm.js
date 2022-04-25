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
import {useTranslation} from 'react-i18next'


function AdditionalEducationForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const debouncedCallback = useDebounce(onSaveDataToStore, 800)
	const changePage = useChangePage()
	const {t}=useTranslation()
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
		navigate('/education/:create',{replace:true})
	}
	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
	return (
		<div className='main-funnel'>
			<h1 className='h1'>{t('edu')}</h1>
			<p className='p'>{t('eduP')}</p>
			<div className='add-education-input-div'>
				<label>{t('school')}</label>
				<input
					type='text'
					className='add-education-input'
					maxLength='35'
					name='school'
					value={edu.value.school}
					onChange={edu.onChange}
				/>
			</div>
			<div className='add-education-input-div'>
				<label>{t('city')}</label>
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
					<label>{t('country')}</label>
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
					<b>{t('showC')}</b>
				</label>
			</div>
			<div className='add-education-input-div select'>
				<label>{t('degree')}</label>
				<select
					className='add-education-select'
					name='degree'
					value={edu.value.degree}
					onChange={edu.onChange}
				>
					<option value='' key='1'>
						{t('select')}
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
				<label>{t('field')}</label>
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
					<label className='label'>{t('graduate')}</label>
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
				<Button className='back' onClick={changePage('/education/:create',true)}>
					{t('cancel')}
				</Button>
				<Button className='next' onClick={onSaveDataToStoreHandler}>
					{t('save')}
				</Button>
			</div>
		</div>
	)
}

export default AdditionalEducationForm

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
import { useParams } from 'react-router-dom'
import {useTranslation} from 'react-i18next'


function EducationForm({editModal}) {
	const dispatch = useDispatch()
	const changePage = useChangePage()
	const {t}=useTranslation()
	const {mode}=useParams()
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
	const [saveResume,setSaveResume]=useState(false)

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
	useEffect(() => {
		if(mode === ':edit'){
			setSaveResume(true)
		}else if(mode === ':create'){
			setSaveResume(false)
		}
	}, [useParams]);
	return (
		<div className='main-funnel'>
			<h1 className='h1'>{t('edu')}</h1>
			<div className='intro-div'>
				<p className='p'>{t('eduP')}</p>
				{showEdit && (
					<button className='edit-button' onClick={callEditModal}>
						<b>{t('edit')}</b>
					</button>
				)}
			</div>
			{showEditModal && ReactDOM.createPortal(<div className="backdrop"></div>,document.getElementById('backdrop'))}
			{showEditModal && ReactDOM.createPortal(<EditEducation onCloseModal={callEditModal}/>,document.getElementById('modal'))}
			<div className='education-input-div'>
				<label>{t('school')}</label>
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
				<label>{t('city')}</label>
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
					<label>{t('country')}</label>
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
					<b>{t('showC')}</b>
				</label>
			</div>
			<div className='education-input-div select'>
				<label>{t('degree')}</label>
				<select
					maxLength='25'
					className='education-select'
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
			<div className='education-input-div'>
				<label>{t('field')}</label>
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
					<label className='label'>{t('graduate')}</label>
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
					{t('addEdu')}
				</button>
			</div>
			<div className='btn'>
				{!saveResume && <Button className='back' onClick={changePage('/experience/:create')}>{t('back')}</Button>}
				{!saveResume && <Button className='next' onClick={changePage('/resume')}>
					{t('continue')}
				</Button>}
				{saveResume && <Button className='back' onClick={changePage('/resume',true)}>{t('cencel')}</Button>}
				{saveResume && <Button className='next' onClick={changePage('/resume',true)}>
					{t('save')}
				</Button>}
			</div>
		</div>
	)
}

export default EducationForm

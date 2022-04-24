import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useChangePage from '../../../hooks/useChangePage';
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/user-info-slice';
import Button from '../../../UI/Button/Button';
import { DEGREES } from '../../../utils/constants/general';
import './EditEducationForm.css'
import {useTranslation} from 'react-i18next'


function EditEducationForm() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const changePage=useChangePage()
	const {t}=useTranslation()
    const {extraEducation,id}=useSelector(state=>state.resume)
    const edu=extraEducation.find(edu=>edu.id === id)
    const education=useInput({
        school:edu.school ||'',
		city:edu.city || '',
		country:edu.country||'',
		degree:edu.degree || '',
		fieldOfStudy:edu.fieldOfStudy ||'',
		date:edu.date||'',
		id: id,
    })
    const [showCountry,setShowCountry]=useState(false)

    const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
    const sendEditedEducationDataToStoreHandler=()=>{
        dispatch(resumeActions.editEducaion(education.value))
        navigate('/education',{replace:true})
    }
    return (
        <div className='main-funnel'>
			<h1 className='h1'>{t('editEdu')}</h1>
			<p className='p'>{t('eduP')}</p>
			<div className='add-education-input-div'>
				<label>{t('school')}</label>
				<input
					type='text'
					className='add-education-input'
					maxLength='25'
					name='school'
					value={education.value.school}
					onChange={education.onChange}
				/>
			</div>
			<div className='add-education-input-div'>
				<label>{t('city')}</label>
				<input
					type='text'
					className='add-education-input group'
					name='city'
					value={education.value.city}
					onChange={education.onChange}
				/>
			</div>
			{showCountry && (
				<div className='add-education-input-div'>
					<label>{t('country')}</label>
					<input
						type='text'
						className='add-education-input'
						name='country'
						value={education.value.country}
						onChange={education.onChange}
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
					value={education.value.degree}
					onChange={education.onChange}
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
					value={education.value.fieldOfStudy}
					onChange={education.onChange}
				/>
			</div>
			<div>
				<div className='add-start-date'>
					<label className='label'>{t('graduation')}</label>
					<input
						type='date'
						className='add-education-input date'
						name='date'
						value={education.value.date}
						onChange={education.onChange}
					/>
				</div>
			</div>
			<div className='btn'>
				<Button className='back' onClick={changePage('/education',true)}>
					{t('cancel')}
				</Button>
				<Button className='next' onClick={sendEditedEducationDataToStoreHandler}>
					{t('save')}
				</Button>
			</div>
		</div>
    );
}

export default EditEducationForm;
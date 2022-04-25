import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useChangePage from '../../hooks/useChangePage';
import useDebounce from '../../hooks/useDebounce';
import useInput from '../../hooks/useInput';
import { resumeActions } from '../../store/user-info-slice';
import Button from '../../UI/Button/Button';
import './AdditionalExperience.css'
import {useTranslation} from 'react-i18next'


function AdditionalExperience() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
	const changePage=useChangePage()
    const debouncedCallback=useDebounce(onSaveExperienceDataToStore,1000)
	const {t}=useTranslation()
    const [showCountry,setShowCountry]=useState(false)
    const experience=useInput({
        title: '',
		employer:'',
		city:'',
		country:'',
		startDate:'',
		endDate: '',
		id: Date.now().toString(),
    })
    function onSaveExperienceDataToStore(){
		return dispatch(resumeActions.extraExperience(experience.value))
    }
    const showCountryHandler=()=>{
        setShowCountry(prevState=>!prevState)
    }
    const onSaveExperienceDataToStoreHandler=()=>{
        debouncedCallback()
        navigate('/experience/:create',{replace:true})
    }
    return (
        <div className='main-funnel'>
			<h1 className='h1'>{t('exp')}</h1>
			<p className='p'>{t('expP')}</p>
			<div className='add-experience-input-div'>
				<label>{t('title')}</label>
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
				<label>{t('emp')}</label>
				<input
					type='text'
					className='add-experience-input'
					name='employer'
					value={experience.value.employer}
					onChange={experience.onChange}
				/>
			</div>
			<div className='add-experience-input-div'>
				<label>{t('city')}</label>
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
					<label>{t('country')}</label>
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
					<b>{t('showC')}</b>
				</label>
			</div>
			<div>
				<div className='add-end-date'>
					<label>{t('sDate')}</label>
					<input
						type='date'
						className='add-experience-input date'
						name='startDate'
						value={experience.value.startDate}
						onChange={experience.onChange}
					/>
				</div>
				<div className='add-end-date'>
					<label>{t('eDate')}</label>
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
				<Button className='back' onClick={changePage('/experience/:create',true)}>{t('cancel')}</Button>
				<Button className='next' onClick={onSaveExperienceDataToStoreHandler}>
					{t('save')}
				</Button>
			</div>
		</div>
    );
}

export default AdditionalExperience;
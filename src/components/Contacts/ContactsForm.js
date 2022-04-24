import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './ContactsForm.css'
import InputMask from 'react-input-mask'
import {useTranslation} from 'react-i18next'


function ContactsForm() {
	const { name, city, address, country, email, phone } = useSelector((state) => state.resume.contact)
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(sendContantDataToStore, 800)
	const changePage = useChangePage()
	const {t , i18n}=useTranslation()
	const user = useInput({
		name: name || '',
		city: city || '',
		address: address || '',
		country: country || '',
		email: email || '',
		phone: phone || '',
	})
	const [showCountry, setShowCountry] = useState(false)

	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
	const { value } = user

	function sendContantDataToStore() {
		return dispatch(resumeActions.contacts(value))
	}
	useEffect(() => {
		debouncedCallback()
	}, [debouncedCallback])
	return (
		<div className='main-funnel'>
			<h1 className='h1'>{t("contactIntro")}</h1>
			<p className='question'>{t('contatcIntroAsk')}</p>
			<div className='contact-input-div'>
				<label>{t('name')}</label>
				<input
					type='text'
					className='contact-input'
					maxLength='20'
					value={user.value.name}
					name='name'
					onChange={user.onChange}
				/>
			</div>
			<div className='contact-input-div'>
				<label>{t('address')}</label>
				<input
					type='text'
					maxLength='20'
					className='contact-input'
					name='address'
					value={user.value.address}
					onChange={user.onChange}
				/>
			</div>
			<div className='contact-input-div'>
				<label>{t('city')}</label>
				<input
					type='text'
					maxLength='15'
					className='contact-input group'
					name='city'
					value={user.value.city}
					onChange={user.onChange}
				/>
			</div>
			{showCountry && (
				<div className='contact-input-div'>
					<label>{t('country')}</label>
					<input
						type='text'
						maxLength='15'
						className='contact-input'
						name='country'
						value={user.value.country}
						onChange={user.onChange}
					/>
				</div>
			)}
			<div className='show-country'>
				<input type='checkbox' className='show-country checkbox' onClick={showCountryHandler} />
				<label>
					<b>{t('showC')}</b>
				</label>
			</div>
			<div className='contact-input-div'>
				<label>{t('email')}</label>
				<input
					type='email'
					maxLength='30'
					className='contact-input'
					name='email'
					value={user.value.email}
					onChange={user.onChange}
				/>
			</div>
			<div className='contact-input-div'>
				<label>{t('phone')}</label>
				<InputMask
					type='text'
					className='contact-input'
					name='phone'
					mask={'+\\9\\9\\6\\ (999) 99 99 99'}
					value={user.value.phone}
					onChange={user.onChange}
				/>
			</div>
			<div className='btn-contacts'>
				<Button className='next' onClick={changePage('/summary')}>
					{t('continue')}
				</Button>
			</div>
		</div>
	)
}

export default ContactsForm

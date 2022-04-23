import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './ContactsForm.css'
import InputMask from 'react-input-mask'


function ContactsForm() {
	const { name, city, address, country, email, phone } = useSelector(
		(state) => state.resume.contact,
	)
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(sendContantDataToStore, 800)
	const changePage = useChangePage()
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
			<h1 className='h1'>Let's complete your Resume Heading</h1>
			<p className='question'>
				How do you want employers to contact you?
			</p>
			<div className='contact-input-div'>
				<label>Name</label>
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
				<label>Address</label>
				<input
					type='text'
					className='contact-input'
					name='address'
					value={user.value.address}
					onChange={user.onChange}
				/>
			</div>
			<div className='contact-input-div'>
				<label>City</label>
				<input
					type='text'
					className='contact-input group'
					name='city'
					value={user.value.city}
					onChange={user.onChange}
				/>
			</div>
			{showCountry && (
				<div className='contact-input-div'>
					<label>Country</label>
					<input
						type='text'
						className='contact-input'
						name='country'
						value={user.value.country}
						onChange={user.onChange}
					/>
				</div>
			)}
			<div className='show-country'>
				<input type='checkbox' onClick={showCountryHandler} />
				<label>
					<b>Show Country</b>
				</label>
			</div>
			<div className='contact-input-div'>
				<label>Email</label>
				<input
					type='text'
					className='contact-input'
					name='email'
					value={user.value.email}
					onChange={user.onChange}
				/>
			</div>
			<div className='contact-input-div'>
				<label>Phone</label>
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
					CONTINUE
				</Button>
			</div>
		</div>
	)
}

export default ContactsForm

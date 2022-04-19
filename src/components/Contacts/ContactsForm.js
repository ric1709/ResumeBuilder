import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import Button from '../../UI/Button/Button'
import './ContactsForm.css'

function ContactsForm() {
	const selector=useSelector(state=>state.resume)
	const dispatch=useDispatch()
	const navigate=useNavigate()
	const user = useInput({
		name: '',
		city: '',
		address: '',
		country: '',
		email: '',
		phone: '',
	})
	const [showCountry, setShowCountry] = useState(false)

	const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}

	const handler=(e)=>{
		e.preventDefault()
		console.log(user.value);
	}

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
					name='name'
					value={user.value.name}
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
				<input
					type='text'
					className='contact-input'
					name='phone'
					value={user.value.phone}
					onChange={user.onChange}
				/>
			</div>
			<div className='btn'>
				<Button className='back'>BACK</Button>
				<Button className='next' onClick={handler}>CONTINUE</Button>
			</div>
		</div>
	)
}

export default ContactsForm

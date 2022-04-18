import React from 'react'
import ContactsForm from '../components/Contacts/ContactsForm'
import './ContactPage.css'
import contactimg from '../assets/imgs/contact-img.jpeg'


function ContactPage() {
	return (
		<div className='wrapper'>
			<ContactsForm />
			<div className='rigthImg'>
				<img
					className='img'
                    src={contactimg}
					alt=''
				/>
			</div>
		</div>
	)
}

export default ContactPage

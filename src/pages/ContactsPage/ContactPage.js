import React from 'react'
import './ContactPage.css'
import contactimg from '../../assets/imgs/contact-img.jpeg'
import ContactsForm from '../../components/Contacts/ContactsForm'
import ResumePreview from '../../components/Resume/ResumePreview'


function ContactPage() {
	return (
		<div className='wrapper'>
			<ContactsForm />
			<ResumePreview/>
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

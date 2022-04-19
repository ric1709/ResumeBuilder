import React, { useEffect, useState } from 'react'
import './ResumePreview.css'
import { useSelector } from 'react-redux'

function ResumePreview() {
	const { resume } = useSelector((state) => state)
	const {contact}=resume

	useEffect(() => {
		localStorage.setItem('@resume-data', JSON.stringify(resume))
	}, [resume])
	return (
		<div className='wrapper-preview-mini'>
			<div className='contact-info'>~
				<h1>{contact.name  || 'Contact Information'}</h1>
				<hr />
				<div>
					<p>{contact.address}</p>
					<p>{contact.phone}</p>
					<p>{contact.email}</p>
				</div>
			</div>
			<div className='summary'>
				<h2>Professional Summary</h2>
				<hr />
				<div className='summary-item'>
					<li>
						Forward-thinking Head of Marketing experienced in
						developing and executing marketing strategies and
						programs to achieve continued brand growth and
						profitability. Focused on defining brand vision and
						positioning, increasing brand relevance and driving
						traffic to various sales channels. Integrate consumer
						insights into strategic planning initiatives. Subject
						Matter Expert on consumer, competition and different
						sales and marketing channels across global landscape.
					</li>
				</div>
			</div>
			<div className='skills'>
				<h2>Skills</h2>
				<hr />
				<div className='skill-list'>
					<li>Product launch management</li>
					<li>Product launch management</li>
					<li>Product launch management</li>
					<li>Product launch management</li>
					<li>Product launch management</li>
					<li>Product launch management</li>
					<li>Product launch management</li>
					<li>Product launch management</li>
				</div>
			</div>
			<div className='experience'>
				<h2>Experience</h2>
				<hr />
				<div className='position-date'>
					<p>Position</p>
					<p>Date</p>
				</div>
				<div className='experience-address'>
					<p>Peaksoft :</p>
					<p> : Address</p>
				</div>
			</div>
			<div className='education'>
				<h2>Education</h2>
				<hr />
				<div className='education-item'>
					<p>Field of study : asd</p>
					<p>Date</p>
				</div>
				<div className='education-address'>
					<p>Jaktel :</p>
					<p>: Address</p>
				</div>
			</div>
		</div>
	)
}

export default ResumePreview

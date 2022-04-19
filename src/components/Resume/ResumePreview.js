import React, { useEffect } from 'react'
import './ResumePreview.css'
import { useSelector } from 'react-redux'

function ResumePreview() {
	const { resume } = useSelector((state) => state)
	const { contact, education,experience ,summary,skills} = resume
	
	useEffect(() => {
		window.onbeforeunload = () => {
			return localStorage.setItem('@resume-data', JSON.stringify(resume))
		}
	}, [resume])
	return (
		<div className='wrapper-preview'>
			<div className='contact-info'>
				<h1>{contact.name || 'Contact Information'}</h1>
				<hr />
				<div>
					<p>
						{contact.address} , {contact.city} ,{contact.country}{' '}
					</p>
					<p>{contact.phone}</p>
					<p>{contact.email}</p>
				</div>
			</div>
			<div className='summary'>
				<h2>Professional Summary</h2>
				<hr />
				<div className='summary-item'>
					<li>{summary.summary}</li>
				</div>
			</div>
			<div className='skills'>
				<h2>Skills</h2>
				<hr />
				<div className='skill-list'>
					{skills.map(el=>(
						<li key={el.skill} >{el.skill}</li>
					))}
				</div>
			</div>
			<div className='experience'>
				<h2>Experience</h2>
				<hr />
				<div className='position-date'>
					<p><b>{experience.title}</b></p>
					<p>{experience.startDate} to {experience.endDate}</p>
				</div>
				<div className='experience-address'>
					<p><b>{experience.employer}</b>:</p>
					<p> : {experience.city} , {experience.country}</p>
				</div>
			</div>
			<div className='education'>
				<h2>Education</h2>
				<hr />
						<div className='education-item'>
							<p><b>{education.degree}</b> :: {education.fieldOfStudy}</p>
							<p>{education.date}</p>
						</div>
						<div className='education-address'>
							<p><b>{education.school}</b> :</p>
							<p> :{education.city} , {education.country}</p>
						</div>
			</div>
		</div>
	)
}

export default ResumePreview

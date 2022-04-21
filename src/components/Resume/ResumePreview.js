import React, { useEffect, useState } from 'react'
import './ResumePreview.css'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function ResumePreview() {
	const path = useLocation()
	const { resume } = useSelector((state) => state)
	const { contact, education, experience, summary, skills, extraEducation ,extraExperience} = resume
	const [changePreviewPage, setChangePreviewPage] = useState(false)

	useEffect(() => {
		if (path.pathname === '/resume') {
			setChangePreviewPage(true)
		} else {
			setChangePreviewPage(false)
		}
	}, [path])

	useEffect(() => {
		window.onbeforeunload = () => {
			// return localStorage.setItem('@resume-data', JSON.stringify(resume))
		}
	}, [resume])
	return (
		<div
			className={
				changePreviewPage ? 'wrapper-preview' : 'wrapper-preview-mini'
			}
		>
			<div className='contact-info'>
				<h1>{contact.name || 'Contact Information'}</h1>
				<hr />
				<div>
					<p>
						{contact.address || 'adress'}, {contact.city || 'city'},{' '}
						{contact.country}{' '}
					</p>
					<p>{contact.phone || 'phone'}</p>
					<p>{contact.email || 'email'}</p>
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
					{skills.map((el) => (
						<li key={el.skill}>{el.skill}</li>
					))}
				</div>
			</div>
			<div className='experience'>
				<h2>Experience</h2>
				<hr />
				<div className='position-date'>
					<p>
						<b>{experience.title}</b>
					</p>
					<p>
						{experience.startDate || 'since'} to{' '}
						{experience.endDate || 'when'}
					</p>
				</div>
				<div className='experience-address'>
					<p>
						<b>{experience.employer || 'employer'}</b>:
					</p>
					<p>
						{' '}
						: {experience.city || 'city'} , {experience.country}
					</p>
				</div>
				{extraExperience.map(experience=>(
					<div key={experience.id}>
						<div className='position-date'>
					<p>
						<b>{experience.title}</b>
					</p>
					<p>
						{experience.startDate || 'since'} to{' '}
						{experience.endDate || 'when'}
					</p>
				</div>
				<div className='experience-address'>
					<p>
						<b>{experience.employer || 'employer'}</b>:
					</p>
					<p>
						{' '}
						: {experience.city || 'city'} , {experience.country}
					</p>
				</div>
					</div>
				))}
			</div>
			<div className='education'>
				<h2>Education</h2>
				<hr />
				<div className='education-item'>
					<p>
						<b>{education.degree || 'degree'}</b> ::{' '}
						{education.fieldOfStudy || 'field of study'}
					</p>
					<p>{education.date}</p>
				</div>
				<div className='education-address'>
					<p>
						<b>{education.school || 'school name'}</b> :
					</p>
					<p>
						{' '}
						: {education.city || 'city'} , {education.country}
					</p>
				</div>
				{extraEducation.map((education) => (
					<div key={education.id}>
						<div className='education-item'>
							<p>
								<b>{education.degree}</b> ::{' '}
								{education.fieldOfStudy}
							</p>
							<p>{education.date}</p>
						</div>
						<div className='education-address'>
							<p>
								<b>{education.school}</b> :
							</p>
							<p>
								{' '}
								:{education.city} , {education.country}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ResumePreview

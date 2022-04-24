import React, { useEffect, useState } from 'react'
import './ResumePreview.css'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {MdOutlinePhoneEnabled} from 'react-icons/md'
import {IoIosMail} from 'react-icons/io'
import {FaAddressCard} from 'react-icons/fa'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaListUl} from 'react-icons/fa'
import {BsCheckLg} from 'react-icons/bs'
import {useTranslation} from 'react-i18next'


function ResumePreview({componentRef}) {
	const path = useLocation()
	const {t}=useTranslation()
	const { resume } = useSelector((state) => state)
	const {
		contact,
		education,
		experience,
		summary,
		skills,
		extraEducation,
		extraExperience,
	} = resume
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
			return localStorage.setItem('@resume-data', JSON.stringify(resume))
		}
	}, [resume])
	return (
		<div ref={componentRef} className={changePreviewPage ? 'wrapper-preview' : 'wrapper-preview-mini'}>
			<div className='rBlock'>
				<h2>{contact.name || t('info')}</h2>
				<p><MdOutlinePhoneEnabled/><span>{contact.phone }</span></p>
				<p><IoIosMail/><span>{contact.email }</span></p>
				<p><FaAddressCard/><span>{contact.address}, {contact.city} , {contact.country}</span></p>
				<div className='block-skills'><FaListUl/><span>{t('Skills')}</span></div>
				{skills.map(el=>(
					<p key={el.id}><BsCheckLg/> <span>{el.skill}</span></p>
				))}
			</div>
			<div className='LBlock'>
				<div className='poragraph'>
					<h3>{t('psummary')}</h3>
					<p>{summary.summary}</p>
				</div>
				<div className='poragraph'>
					<h3>{t('experience')}</h3>
					<h4>{experience.title}</h4>
					<h4>{experience.employer}</h4>
					<h4>{experience.city } , {experience.country}</h4>
					<h4>{experience.startDate}<AiOutlineArrowRight/> {experience.endDate}</h4>
				</div>
				{extraExperience.map(experience=>(
					<div className='poragraph' key={experience.id}>
					<h3>{t('experience')}</h3>
					<h4>{experience.title}</h4>
					<h4>{experience.employer}</h4>
					<h4>{experience.city} , {experience.country}</h4>
					<h4>{experience.startDate}<AiOutlineArrowRight/> {experience.endDate}</h4>
				</div>
				))}
				<div className='poragraph'>
					<h3>{t('education')}</h3>
					<h4>{education.degree} : {education.fieldOfStudy}</h4>
					<h4>{education.school}</h4>
					<h4>{education.city} , {education.country}</h4>
					<h4>{education.date}</h4>
				</div>
				{extraEducation.map(education=>(
					<div className='poragraph' key={education.id}>
					<h3>{t('education')}</h3>
					<h4>{education.degree} : {education.fieldOfStudy}</h4>
					<h4>{education.school}</h4>
					<h4>{education.city} , {education.country}</h4>
					<h4>{education.date}</h4>
				</div>
				))}
			</div>
		</div>
	)
}

export default ResumePreview

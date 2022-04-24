import React, { useRef } from 'react'
import ResumePreview from '../../components/Resume/ResumePreview'
import './ResumePage.css'
import { FaPen } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { MdCreateNewFolder } from 'react-icons/md'
import useChangePage from '../../hooks/useChangePage'
import { useReactToPrint } from 'react-to-print'
import { useDispatch } from 'react-redux'
import { resumeActions } from '../../store/user-info-slice'
import { useNavigate } from 'react-router-dom'
import {useTranslation} from 'react-i18next'



function ResumePage() {
	const dispatch=useDispatch()
	const changePage=useChangePage()
	const navigate=useNavigate()
	const {t}=useTranslation()
	const componentRef=useRef(null)
	const printResumeHandler=useReactToPrint({
		content: ()=>componentRef.current,
	})
	const createNewResumeHandler=()=>{
		dispatch(resumeActions.newResume())
		navigate('/contact')
		localStorage.clear('@resume-data')
	}
	return (
		<div className='wrapper-resume'>
			<div className='header-resume'>
				<div className='title'>
					<button className='title-name'>{t('resumeTitle')}</button>
				</div>
				<div className='btn-div'>
					<button className='btn-download' onClick={printResumeHandler}>{t('download')}</button>
				</div>
			</div>
			<div className='content-resume'>
				<div className='wrapper-btn'>
					<h4>{t('editSections')}</h4>
					<div className='add-btn btn-create' onClick={createNewResumeHandler}>
						<p>{t('create')}</p>
						<MdCreateNewFolder />
					</div>
					<div className='add-btn' onClick={changePage('/contact',true)}>
						<p>{t('contact')}</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/summary')}>
						<p>{t('Summary')}</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/skills')}>
						<p>{t('Skills')}</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/experience')}>
						<p>{t('experience')}</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/education')}>
						<p>{t('education')}</p>
						<FaPen />
					</div>
					<div className='add-btn back-btn' onClick={changePage('/education')}>
						<p>{t('back')}</p>
						<IoArrowBack fontSize='30' />
					</div>
				</div>
				<ResumePreview componentRef={componentRef}/>
			</div>
		</div>
	)
}

export default ResumePage

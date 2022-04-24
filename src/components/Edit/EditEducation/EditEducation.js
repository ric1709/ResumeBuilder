import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../UI/Button/Button'
import './EditEducation.css'
import { RiPencilFill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import { resumeActions } from '../../../store/user-info-slice'
import { useNavigate } from 'react-router-dom'
import {useTranslation} from 'react-i18next'


function EditEducation({ onCloseModal }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {t}=useTranslation()
	const { extraEducation } = useSelector((state) => state.resume)

	const removeEducation = (id) => {
		dispatch(resumeActions.removeExtraEducaion(id))
	}
	const editEducationHandler = (id) => {
		navigate('/eduction-edit')
		dispatch(resumeActions.edit(id))
	}
	useEffect(()=>{
		if(!extraEducation){
			onCloseModal()
		}
	},[extraEducation])
	return (
		<>
			<div className='main-edit-div'>
				<header className='edit-header'>
					<h1>{t('editEdu')}</h1>
				</header>
				<main>
					{extraEducation.map((edu,i) => (
						<div className='wrapper-edit-block' key={edu.id}>
							<div className='wrapper-edit'>
								<div className='circle'>{i+1}</div>
								<div className='wrapper-title'>
									<p className='title'>
										<b>{edu.school}</b>
									</p>
									<p className='desk'>{edu.degree}</p>
								</div>
							</div>
							<div className='wrapper-icons'>
								<div className='icon'>
									<RiPencilFill
										fontSize='23px'
										onClick={() => {
											editEducationHandler(edu.id)
										}}
									/>
								</div>
								<div className='icon'>
									<AiFillDelete
										fontSize='23px'
										onClick={() => {
											removeEducation(edu.id)
										}}
									/>
								</div>
							</div>
						</div>
					))}
				</main>
				<div className='edit-btn'>
					<Button className='back' onClick={onCloseModal}>
						{t('cancel')}
					</Button>
					<Button className='next' onClick={onCloseModal}>
						{t('save')}
					</Button>
				</div>
			</div>
		</>
	)
}

export default EditEducation

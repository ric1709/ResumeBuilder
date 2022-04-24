import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../UI/Button/Button'
import './EditSkillsModal.css'
import { RiPencilFill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import { resumeActions } from '../../../store/user-info-slice'
import { useNavigate } from 'react-router-dom'
import {useTranslation} from 'react-i18next'


function EditSkillsModal({ onCloseModal }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {t}=useTranslation()
	const { skills} = useSelector((state) => state.resume)

	const removeEducation = (id) => {
		dispatch(resumeActions.removeSkills(id))
	}
	const editEducationHandler = (id) => {
		navigate('/edit-skills')
		dispatch(resumeActions.edit(id))
	}
    useEffect(()=>{
        if(!skills.length){
            onCloseModal()
        }
    },[skills])
	return (
		<>
			<div className='main-edit-div'>
				<header className='edit-header'>
					<h1>{t('editS')}</h1>
				</header>
				<main>
					{skills.map((el,i) => (
						<div className='wrapper-edit-block' key={el.id}>
							<div className='wrapper-edit'>
								<div className='circle'>{i+1}</div>
								<div className='wrapper-title'>
									<p className='title'>
										<b>{el.skill}</b>
									</p>
								</div>
							</div>
							<div className='wrapper-icons'>
								<div className='icon'>
									<RiPencilFill
										fontSize='23px'
										onClick={() => {
											editEducationHandler(el.id)
										}}
									/>
								</div>
								<div className='icon'>
									<AiFillDelete
										fontSize='23px'
										onClick={() => {
											removeEducation(el.id)
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

export default EditSkillsModal
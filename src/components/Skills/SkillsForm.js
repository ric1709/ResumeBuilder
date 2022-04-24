import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import EditSkillsModal from '../Edit/EditSkills/EditSkillsModal'
import './SkillsForm.css'
import {useTranslation} from 'react-i18next'
import { useParams } from 'react-router-dom'

function SkillsForm({ editModal }) {
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(saveDataToStore, 800)
	const changePage = useChangePage()
	const {mode}=useParams()
	const { skills } = useSelector((state) => state.resume)
	const {t}=useTranslation()
	const [showEdit, setShowEdit] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [skill,setSkill]=useState('')
	const [saveResume,setSaveResume]=useState(false)

	function saveDataToStore() {
		return dispatch(resumeActions.skills(skill))
	}
	const callEditModal = () => {
		editModal(showEditModal)
		setShowEditModal((prevState) => !prevState)
	}
	const saveSkillsToStoreHandler = () => {
		debouncedCallback()
		setSkill('')
	}
	useEffect(() => {
		if (skills.length) {
			setShowEdit(true)
		} else {
			setShowEdit(false)
		}
	}, [skills])
	useEffect(() => {
		if(mode === ':edit'){
			setSaveResume(true)
		}else if(mode === ':create'){
			setSaveResume(false)
		}
	}, [useParams]);

	return (
		<div className='skills-main-funnel'>
			<h1 className='skills-h1'>{t('skills')}</h1>
			<div className='skills-edit-div'>
				<p className='skills-p'>{t('skillsH')}</p>
				{showEdit && (
					<button className='edit-button' onClick={callEditModal}>
						<b>{t('edit')}</b>
					</button>
				)}
			</div>
			<div className='skills-input-div'>
				<label>{t('addSkills')}</label>
				<input
					type='text'
					className='skills-input'
					maxLength='30'
					placeholder='Eg:Calculating'
					name='skill'
					value={skill}
					onChange={(e)=>setSkill(e.target.value)}
				/>
			</div>
			<div className='additional-btn-div'>
				<button className='add-btn' onClick={saveSkillsToStoreHandler}>
					{t('addS')}
				</button>
			</div>
			<div className='btn'>
				{!saveResume && <Button className='back' onClick={changePage('/summary/:create')}>{t('back')}</Button>}
				{!saveResume  && <Button className='next' onClick={changePage('/experience/:create')}>
					{t('continue')}
				</Button>}
				{saveResume && <Button className='back' onClick={changePage('/resume',true)}>{t('cancel')}</Button>}
				{saveResume  && <Button className='next' onClick={changePage('/resume',true)}>
					{t('save')}
				</Button>}
			</div>
			{showEditModal &&
				ReactDOM.createPortal(
					<EditSkillsModal onCloseModal={callEditModal} />,
					document.getElementById('modal'),
				)}
			{showEditModal &&
				ReactDOM.createPortal(
					<div className='backdrop'></div>,
					document.getElementById('backdrop'),
				)}
		</div>
	)
}

export default SkillsForm

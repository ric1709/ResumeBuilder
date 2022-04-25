import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useChangePage from '../../../hooks/useChangePage'
import useDebounce from '../../../hooks/useDebounce'
import { resumeActions } from '../../../store/user-info-slice'
import Button from '../../../UI/Button/Button'
import './EditSkillsForm.css'
import {useTranslation} from 'react-i18next'


function EditSkillsForm() {
	const dispatch = useDispatch()
	const navigate=useNavigate()
	const debouncedCallback = useDebounce(saveDataToStore, 800)
	const changePage = useChangePage()
	const {t}=useTranslation()
	const { skills, id } = useSelector((state) => state.resume)
	const skillItem = skills.find((el) => el.id === id)
	const [skill, setSkill] = useState({
		skill: skillItem.skill,
		id: id,
	})

	function saveDataToStore() {
		return dispatch(resumeActions.editSkills(skill))
	}
	const saveSkillsToStoreHandler = () => {
		debouncedCallback()
		navigate('/skills/:create',{replace:true})

	}
	return (
		<div className='skills-main-funnel'>
			<h1 className='skills-h1'>{t('skills')}</h1>
			<div className='skills-edit-div'>
				<p className='skills-p'>{t('skillsH')}</p>
			</div>
			<div className='skills-input-div'>
				<label>{t('addSkills')}</label>
				<input
					type='text'
					className='skills-input'
					placeholder='Eg:Team Building'
					name='skill'
					value={skill.skill}
					onChange={(e) =>
						setSkill((prev) => {
							return {
								...prev,
								skill: e.target.value,
							}
						})
					}
				/>
			</div>
			<div className='btn'>
				<Button className='back' onClick={changePage('/skills/:create',true)}>{t('cancel')}</Button>
				<Button className='next' onClick={saveSkillsToStoreHandler}>
					{t('save')}
				</Button>
			</div>
		</div>
	)
}

export default EditSkillsForm

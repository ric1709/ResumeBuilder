import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../../hooks/useChangePage'
import useDebounce from '../../../hooks/useDebounce'
import { resumeActions } from '../../../store/user-info-slice'
import Button from '../../../UI/Button/Button'
import './EditSkillsForm.css'

function EditSkillsForm() {
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(saveDataToStore, 800)
	const changePage = useChangePage()
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
	}
	return (
		<div className='skills-main-funnel'>
			<h1 className='skills-h1'>Skills</h1>
			<div className='skills-edit-div'>
				<p className='skills-p'>Highlight 6-8 of your top skills.</p>
			</div>
			<div className='skills-input-div'>
				<label>Add your skills</label>
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
			<div className='additional-btn-div'>
				<button className='add-btn' onClick={saveSkillsToStoreHandler}>
					+ADD SKILLS
				</button>
			</div>
			<div className='btn'>
				<Button className='back'>CANCEL</Button>
				<Button className='next' onClick={changePage('/skills')}>
					SAVE
				</Button>
			</div>
		</div>
	)
}

export default EditSkillsForm

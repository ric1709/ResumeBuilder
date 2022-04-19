import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './SkillsForm.css'

function SkillsForm() {
	const navigate=useNavigate()
	const dispatch=useDispatch()
	const skillInfo = useInput({
		skill: '',
		id:Math.random().toString(),
	})

	const sendSkillsHandler=()=>{
		dispatch(resumeActions.skills(skillInfo.value))
		navigate('/summary')
	}

	return (
		<div className='skills-main-funnel'>
			<h1 className='skills-h1'>Skills</h1>
			<p className='skills-p'>Highlight 6-8 of your top skills.</p>
				<div className='skills-input-div'>
					<label>Add your skills</label>
					<input
						type='text'
						className='skills-input'
						placeholder='Eg:Team Building'
						name='skill'
						value={skillInfo.value.skill}
						onChange={skillInfo.onChange}
					/>
					<Button className='add'>ADD</Button>
				</div>
			<div className='skills-input-div select'>
				<label>Your skills</label>
				<select
					className='skills-select'
					name='skill'
					value={skillInfo.value.skill}
					onChange={skillInfo.onChange}
				>
					<option value='' key='1'>
						Select Your Skills
					</option>
					<option value='Data Management' key='2'>
						Data Management
					</option>
					<option value='Project Management' key='3'>
						Project Management
					</option>
					<option value='Critical Thinking' key='4'>
						Critical Thinking
					</option>
					<option value='Responsibility' key='5'>
						Responsibility
					</option>
					<option value='Team Player' key='6'>
						Team Player
					</option>
					<option value='Leader' key='7'>
						Leader
					</option>
				</select>
			</div>
			<div className='btn'>
				<Button className='back'>BACK</Button>
				<Button className='next' onClick={sendSkillsHandler}>CONTINUE</Button>
			</div>
		</div>
	)
}

export default SkillsForm

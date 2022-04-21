import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import { SKILLS } from '../../utils/constants/general'
import './SkillsForm.css'

function SkillsForm() {
	const dispatch=useDispatch()
	const debouncedCallback=useDebounce(saveDataToStore,1500)
	const changePage=useChangePage()
	const skillInfo = useInput({
		skill: '',
		id:Math.random().toString(),
	})
	function saveDataToStore(){
		return dispatch(resumeActions.skills(skillInfo.value))
	}
	const saveSkillsToStoreHandler=()=>{
		debouncedCallback()
	}
	
	return (
		<div className='skills-main-funnel'>
			<h1 className='skills-h1'>Skills</h1>
			<p className='skills-p'>Highlight 6-8 of your top skills.</p>
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
					{SKILLS.map(el=>(
						<option value={el} key={el}>{el}</option>
					))}
				</select>
			</div>
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
				</div>
				<div className='additional-btn-div'>
				<button className='add-btn' onClick={saveSkillsToStoreHandler}>
					+ADD SKILLS
				</button>
			</div>
			<div className='btn'>
				<Button className='back'>BACK</Button>
				<Button className='next' onClick={changePage('/summary')}>CONTINUE</Button>
			</div>
		</div>
	)
}

export default SkillsForm

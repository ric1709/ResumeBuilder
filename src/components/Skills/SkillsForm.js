import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import EditSkillsModal from '../Edit/EditSkills/EditSkillsModal'
import './SkillsForm.css'


function SkillsForm({ editModal }) {
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(saveDataToStore, 800)
	const changePage = useChangePage()
	const { skills } = useSelector((state) => state.resume)
	
	const [showEdit, setShowEdit] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [skill,setSkill]=useState('')

	function saveDataToStore() {
		return dispatch(resumeActions.skills(skill))
	}
	const callEditModal = () => {
		editModal(showEditModal)
		setShowEditModal((prevState) => !prevState)
	}
	const saveSkillsToStoreHandler = () => {
		debouncedCallback()
	}
	useEffect(() => {
		if (skills.length) {
			setShowEdit(true)
		} else {
			setShowEdit(false)
		}
	}, [skills])

	return (
		<div className='skills-main-funnel'>
			<h1 className='skills-h1'>Skills</h1>
			<div className='skills-edit-div'>
				<p className='skills-p'>Highlight 6-8 of your top skills.</p>
				{showEdit && (
					<button className='edit-button' onClick={callEditModal}>
						<b>EDIT</b>
					</button>
				)}
			</div>
			<div className='skills-input-div'>
				<label>Add your skills</label>
				<input
					type='text'
					className='skills-input'
					maxLength='30'
					placeholder='Eg:Team Building'
					name='skill'
					value={skill}
					onChange={(e)=>setSkill(e.target.value)}
				/>
			</div>
			<div className='additional-btn-div'>
				<button className='add-btn' onClick={saveSkillsToStoreHandler}>
					+ADD SKILLS
				</button>
			</div>
			<div className='btn'>
				<Button className='back' onClick={changePage('/summary')}>BACK</Button>
				<Button className='next' onClick={changePage('/experience')}>
					CONTINUE
				</Button>
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

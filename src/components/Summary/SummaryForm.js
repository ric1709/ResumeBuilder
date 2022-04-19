import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './SummaryForm.css'

function SummaryForm() {
	const navigate=useNavigate()
	const dispatch=useDispatch()
	const summaryInfo=useInput({
		summary:'',
		id:Math.random().toString()
	})
	const sendSummaryHandler=()=>{
		dispatch(resumeActions.summary(summaryInfo.value))
		navigate('/resume')
	}
	return (
		<div className='summary-main-funnel'>
			<h1 className='summary-h1'>Profssional Summary</h1>
			<p className='summary-p'>Finish your resume with short summary</p>
			<div className='summary-div'>
				<textarea
					cols='30'
					rows='10'
					className='summary-text'
					name='summary'
					value={summaryInfo.value.summary}
					onChange={summaryInfo.onChange}
				></textarea>
			</div>
			<div className='btn-summary'>
				<Button className='back'>BACK</Button>
				<Button className='next' onClick={sendSummaryHandler}>CONTINUE</Button>
			</div>
		</div>
	)
}

export default SummaryForm

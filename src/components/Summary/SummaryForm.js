import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './SummaryForm.css'

function SummaryForm() {
	const dispatch = useDispatch()
	const debouncedCallback = useDebounce(saveDataToStore, 800)
	const changePage=useChangePage()
	const {summary}=useSelector(state=>state.resume.summary)
	const summaryInfo = useInput({
		summary:summary||'',
	})
	function saveDataToStore() {
		return dispatch(resumeActions.summary(summaryInfo.value))
	}
	useEffect(() => {
		debouncedCallback()
	}, [debouncedCallback])

	return (
		<div className='summary-main-funnel'>
			<h1 className='summary-h1'>Profssional Summary</h1>
			<p className='summary-p'>Finish your resume with short summary</p>
			<div className='summary-div'>
				<textarea
					placeholder='Write your professional summary (300 character)'
					className='summary-text'
					name='summary'
					maxLength='370'
					value={summaryInfo.value.summary}
					onChange={summaryInfo.onChange}
				></textarea>
			</div>
			<div className='btn-summary'>
				<Button className='back' onClick={changePage('/contact')}>BACK</Button>
				<Button className='next' onClick={changePage('/skills')}>
					CONTINUE
				</Button>
			</div>
		</div>
	)
}

export default SummaryForm

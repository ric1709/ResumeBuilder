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
		id: Math.random().toString(),
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
				<Button className='next' onClick={changePage('/resume')}>
					CONTINUE
				</Button>
			</div>
		</div>
	)
}

export default SummaryForm
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './SummaryForm.css'
import {useTranslation} from 'react-i18next'

function SummaryForm() {
	const dispatch = useDispatch()
	const {t}=useTranslation()
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
			<h1 className='summary-h1'>{t('summary')}</h1>
			<p className='summary-p'>{t('summaryP')}</p>
			<div className='summary-div'>
				<textarea
					placeholder='Write your professional summary shortly...'
					className='summary-text'
					name='summary'
					maxLength='370'
					value={summaryInfo.value.summary}
					onChange={summaryInfo.onChange}
				></textarea>
			</div>
			<div className='btn-summary'>
				<Button className='back' onClick={changePage('/contact')}>{t('back')}</Button>
				<Button className='next' onClick={changePage('/skills')}>
					{t('continue')}
				</Button>
			</div>
		</div>
	)
}

export default SummaryForm

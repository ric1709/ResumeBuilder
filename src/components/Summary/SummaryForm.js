import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChangePage from '../../hooks/useChangePage'
import useDebounce from '../../hooks/useDebounce'
import useInput from '../../hooks/useInput'
import { resumeActions } from '../../store/user-info-slice'
import Button from '../../UI/Button/Button'
import './SummaryForm.css'
import {useTranslation} from 'react-i18next'
import { useParams } from 'react-router-dom'

function SummaryForm() {
	const dispatch = useDispatch()
	const {t}=useTranslation()
	const debouncedCallback = useDebounce(saveDataToStore, 800)
	const changePage=useChangePage()
	const {mode}=useParams()
	const {summary}=useSelector(state=>state.resume.summary)
	const summaryInfo = useInput({
		summary:summary||'',
	})
	const [saveResume,setSaveResume]=useState(false)
	function saveDataToStore() {
		return dispatch(resumeActions.summary(summaryInfo.value))
	}
	useEffect(() => {
		debouncedCallback()
	}, [debouncedCallback])
	useEffect(() => {
		if(mode === ':edit'){
			setSaveResume(true)
		}else if(mode === ':create'){
			setSaveResume(false)
		}
	}, [useParams]);
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
				{!saveResume && <Button className='back' onClick={changePage('/contact/:create')}>{t('back')}</Button>}
				{!saveResume && <Button className='next' onClick={changePage('/skills/:create')}>
					{t('continue')}
				</Button>}
				{saveResume && <Button className='back' onClick={changePage('/resume',true)}>{t('cancel')}</Button>}
				{saveResume && <Button className='next' onClick={changePage('/resume',true)}>
					{t('save')}
				</Button>}
			</div>
		</div>
	)
}

export default SummaryForm

import React from 'react'
import { useSelector } from 'react-redux'
import ResumePreview from '../components/Resume/ResumePreview'
import './ResumePage.css'

function ResumePage() {
	const selector=useSelector(state=>state)
	const handler=()=>{
		console.log(selector);
	}
	return (
		<div className='wrapper-resume'>
			<div className='header-resume'>
				<div className='title'>
                    <button className='title-name'>Resume</button>
                </div>
				<div className='btn-div'>
					<button className='btn-download' onClick={handler}>Download</button>
				</div>
			</div>
			<div className='resume'>
				<ResumePreview />
			</div>
		</div>
	)
}

export default ResumePage

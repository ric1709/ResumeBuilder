import React from 'react'
import ResumePreview from '../components/Resume/ResumePreview'
import './ResumePage.css'

function ResumePage() {
	return (
		<div className='wrapper-resume'>
			<div className='header-resume'>
				<div className='title'>
                    <button className='title-name'>Resume</button>
                </div>
				<div className='btn-div'>
					<button className='btn-download'>Download</button>
				</div>
			</div>
			<div className='resume'>
				<ResumePreview />
			</div>
		</div>
	)
}

export default ResumePage

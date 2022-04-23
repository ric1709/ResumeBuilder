import React from 'react'
import ResumePreview from '../../components/Resume/ResumePreview'
import './ResumePage.css'
import { FaPen } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { MdCreateNewFolder } from 'react-icons/md'
import useChangePage from '../../hooks/useChangePage'


function ResumePage() {
	const changePage=useChangePage()
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
			<div className='content-resume'>
				<div className='wrapper-btn'>
					<h4>Edit Sections</h4>
					<div className='add-btn btn-create'>
						<p>Create NEW</p>
						<MdCreateNewFolder />
					</div>
					<div className='add-btn' onClick={changePage('/contact')}>
						<p>Contats</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/summary')}>
						<p>Summary</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/skills')}>
						<p>Skills</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/experience')}>
						<p>Experience</p>
						<FaPen />
					</div>
					<div className='add-btn' onClick={changePage('/education')}>
						<p>Education</p>
						<FaPen />
					</div>
					<div className='add-btn back-btn' onClick={changePage('/education')}>
						<p>GO BACK</p>
						<IoArrowBack fontSize='30' />
					</div>
				</div>
				<ResumePreview />
			</div>
		</div>
	)
}

export default ResumePage

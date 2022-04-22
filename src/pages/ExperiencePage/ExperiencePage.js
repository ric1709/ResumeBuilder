import React, { useState } from 'react'
import ExperienceForm from '../../components/Experience/ExperienceForm'
import './ExperiencePage.css'
import experienceimg from '../../assets/imgs/experience-img.jpeg'
import ResumePreview from '../../components/Resume/ResumePreview'


function ExperiencePage() {
	const [showModal,setShowModal]=useState(true)
    const liftUpStateFromForm=(state)=>{
        setShowModal(state)
    }
	return (
		<div className='wrapper'>
			<ExperienceForm  editModal={liftUpStateFromForm}/>
			{showModal && <ResumePreview/>}
			<div className='rigthImg'>
				<img className='img-experience' 
                src={experienceimg}
                alt='' />
			</div>
		</div>
	)
}

export default ExperiencePage

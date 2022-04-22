import React, { useState } from 'react'
import SkillsForm from '../../components/Skills/SkillsForm'
import './SkillsPage.css'
import skillsimg from '../../assets/imgs/skills-img.jpeg'
import ResumePreview from '../../components/Resume/ResumePreview'


function SkillsPage() {
	const [showModal,setShowModal]=useState(true)
    const liftUpStateFromForm=(state)=>{
        setShowModal(state)
    }
	return (
		<div className='skills-wrapper'>
			<SkillsForm  editModal={liftUpStateFromForm}/>
			{showModal && <ResumePreview/>}
			<div>
				<img
					className='skills-img'
					src={skillsimg}
					alt=''
				/>
			</div>
		</div>
	)
}

export default SkillsPage

import React from 'react'
import './EditSkillsPage.css'
import skillsimg from '../../assets/imgs/skills-img.jpeg'
import ResumePreview from '../../components/Resume/ResumePreview'
import EditSkillsForm from '../../components/Edit/EditSkills/EditSkillsForm'

function EditSkillsPage() {
	return (
		<div className='skills-wrapper'>
			<EditSkillsForm />
			<ResumePreview />
			<div>
				<img className='skills-img' src={skillsimg} alt='' />
			</div>
		</div>
	)
}

export default EditSkillsPage

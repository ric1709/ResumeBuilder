import React from 'react'
import SkillsForm from '../components/Skills/SkillsForm'
import './SkillsPage.css'
import skillsimg from '../assets/imgs/skills-img.jpeg'


function SkillsPage() {
	return (
		<div className='skills-wrapper'>
			<SkillsForm />
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

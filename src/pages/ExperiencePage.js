import React from 'react'
import ExperienceForm from '../components/Experience/ExperienceForm'
import './ExperiencePage.css'
import experienceimg from '../assets/imgs/experience-img.jpeg'


function ExperiencePage() {
	return (
		<div className='wrapper'>
			<ExperienceForm />
			<div className='rigthImg'>
				<img className='img-experience' 
                src={experienceimg}
                alt='' />
			</div>
		</div>
	)
}

export default ExperiencePage

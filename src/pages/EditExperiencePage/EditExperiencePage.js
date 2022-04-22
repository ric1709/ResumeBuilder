import React from 'react';
import ResumePreview from '../../components/Resume/ResumePreview';
import experienceimg from '../../assets/imgs/experience-img.jpeg'
import './EditExperiencePage.css'
import EditExperienceForm from '../../components/Edit/EditExperience/EditExperienceForm';

function EditExperiencePage() {
    return (
        <div className='wrapper'>
			<EditExperienceForm/>
			<ResumePreview/>
			<div className='rigthImg'>
				<img className='img-experience' 
                src={experienceimg}
                alt='' />
			</div>
		</div>
    );
}

export default EditExperiencePage;
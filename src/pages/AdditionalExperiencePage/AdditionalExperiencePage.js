import React from 'react';
import AdditionalExperience from '../../components/AdditionalExperience/AdditionalExperience';
import ResumePreview from '../../components/Resume/ResumePreview';
import addExperienceImg from '../../assets/imgs/additionalExperience.avif'
import './AdditionalExperiencePage.css'

function AdditionalExperiencePage() {
    return (
        <div className='wrapper-add'>
			<AdditionalExperience />
			<ResumePreview/>
			<div>
				<img className='add-img-experience' 
                src={addExperienceImg}
                alt='' />
			</div>
		</div>
    );
}

export default AdditionalExperiencePage;
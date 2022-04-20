import React from 'react';
import addeduimg from '../../assets/imgs/add-edu-img.avif'
import AdditionalEducationForm from '../../components/AdditionalEducation/AdditionalEducationForm';
import ResumePreview from '../../components/Resume/ResumePreview';
import './AdditionalEducationPage.css'

function AdditionalEducationPage() {
    return (
        <div className='add-edu-wrapper'>
			<AdditionalEducationForm/>
            <ResumePreview/>
			<div >
				<img className='add-img-education' 
                src={addeduimg}
                alt='' />
			</div>
		</div>
    );
}

export default AdditionalEducationPage;
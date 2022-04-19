import React from 'react';
import EducationForm from '../../components/Education/EducationForm';
import './EducationPage.css'
import educationimg from '../../assets/imgs/education-img.jpeg'
import ResumePreview from '../../components/Resume/ResumePreview';


function EducationPage() {
    return (
        <div className='wrapper'>
			<EducationForm/>
            <ResumePreview/>
			<div className='rigthImg'>
				<img className='img-education' 
                src={educationimg}
                alt='' />
			</div>
		</div>
    );
}

export default EducationPage;
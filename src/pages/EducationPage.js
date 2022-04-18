import React from 'react';
import EducationForm from '../components/Education/EducationForm';
import './EducationPage.css'
import educationimg from '../assets/imgs/education-img.jpeg'


function EducationPage() {
    return (
        <div className='wrapper'>
			<EducationForm/>
			<div className='rigthImg'>
				<img className='img-education' 
                src={educationimg}
                alt='' />
			</div>
		</div>
    );
}

export default EducationPage;
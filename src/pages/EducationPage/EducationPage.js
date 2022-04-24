import React, { useState } from 'react';
import EducationForm from '../../components/Education/EducationForm';
import './EducationPage.css'
import educationimg from '../../assets/imgs/education-img.jpeg'
import ResumePreview from '../../components/Resume/ResumePreview';
import { useLocation } from 'react-router-dom';


function EducationPage() {
    const [showModal,setShowModal]=useState(true)
    const location =useLocation()
    console.log(location);
    const liftUpStateFromForm=(state)=>{
        setShowModal(state)
    }
    return (
        <div className='wrapper'>
			<EducationForm editModal={liftUpStateFromForm}/>
            {showModal && <ResumePreview/>}
			<div className='rigthImg'>
				<img className='img-education' 
                src={educationimg}
                alt='' />
			</div>
		</div>
    );
}

export default EducationPage;
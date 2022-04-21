import React from 'react';
import EditEducationForm from '../../components/Edit/EditEducation/EditEducationForm';
import addeduimg from '../../assets/imgs/add-edu-img.avif'
import ResumePreview from '../../components/Resume/ResumePreview';
import './EditEducationPage.css'

function EditEducationPage() {
    return (
        <div className='add-edu-wrapper'>
			<EditEducationForm/>
            <ResumePreview/>
			<div >
				<img className='add-img-education' 
                src={addeduimg}
                alt='' />
			</div>
		</div>
    );
}

export default EditEducationPage;
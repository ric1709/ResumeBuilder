import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useChangePage from '../../../hooks/useChangePage';
import useInput from '../../../hooks/useInput';
import { resumeActions } from '../../../store/user-info-slice';
import Button from '../../../UI/Button/Button';

function EditExperienceForm() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const changePage=useChangePage()
    const { extraExperience ,id} = useSelector((state) => state.resume)
    const experience=extraExperience.find(el=>el.id === id)
    const { title, employer, city, country, startDate, endDate }=experience
    const { value, onChange } = useInput({
		title: title || '',
		employer: employer || '',
		city: city || '',
		country: country || '',
		startDate: startDate || '',
		endDate: endDate || '',
		id: id,
	})
    const [showCountry, setShowCountry] = useState(false)

    const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
    const sendEditedExperienceDataToStoreHandler=()=>{
        dispatch(resumeActions.editExperience(value))
        navigate('/experience',{replace:true})
    }
    return (
        <div className='main-funnel'>
        <h1 className='h1'> Edit Work Experience</h1>
        <div className='edit-div'>
            <p className='p'>
                Start with your most recent work experience.
            </p>
        </div>
        <div className='experience-input-div'>
            <label>Job Title</label>
            <input
                type='text'
                className='experience-input'
                maxLength='25'
                name='title'
                value={value.title}
                onChange={onChange}
            />
        </div>
        <div className='experience-input-div'>
            <label>Employer</label>
            <input
                type='text'
                className='experience-input'
                name='employer'
                value={value.employer}
                onChange={onChange}
            />
        </div>
        <div className='experience-input-div'>
            <label>City</label>
            <input
                type='text'
                className='experience-input group'
                name='city'
                value={value.city}
                onChange={onChange}
            />
        </div>
        {showCountry && (
            <div className='experience-input-div'>
                <label>Country</label>
                <input
                    type='text'
                    className='experience-input'
                    name='country'
                    value={value.country}
                    onChange={onChange}
                />
            </div>
        )}
        <div className='show-country'>
            <input type='checkbox' onClick={showCountryHandler} />
            <label>
                <b>Show Country</b>
            </label>
        </div>
        <div>
            <div className='end-date'>
                <label>Start Date</label>
                <input
                    type='date'
                    className='experience-input date'
                    name='startDate'
                    value={value.startDate}
                    onChange={onChange}
                />
            </div>
            <div className='end-date'>
                <label>End Date</label>
                <input
                    type='date'
                    className='experience-input date'
                    name='endDate'
                    value={value.endDate}
                    onChange={onChange}
                />
            </div>
        </div>
        <div className='additional-btn-div'>
            <button
                className='add-btn'
                onClick={changePage('/add-experience')}
            >
                +ADD ANOTHER EXPERIENCE
            </button>
        </div>
        <div className='btn'>
            <Button className='back' onClick={changePage('/experience',true)}>CANCEL</Button>
            <Button className='next' onClick={sendEditedExperienceDataToStoreHandler}>
                SAVE
            </Button>
        </div>
    </div>
    );
}

export default EditExperienceForm;
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useChangePage from '../../../hooks/useChangePage';
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/user-info-slice';
import Button from '../../../UI/Button/Button';
import { DEGREES } from '../../../utils/constants/general';
import './EditEducationForm.css'

function EditEducationForm() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const changePage=useChangePage()
    const {extraEducation,id}=useSelector(state=>state.resume)
    const edu=extraEducation.find(edu=>edu.id === id)
    const education=useInput({
        school:edu.school ||'',
		city:edu.city || '',
		country:edu.country||'',
		degree:edu.degree || '',
		fieldOfStudy:edu.fieldOfStudy ||'',
		date:edu.date||'',
		id: id,
    })
    const [showCountry,setShowCountry]=useState(false)

    const showCountryHandler = () => {
		setShowCountry((prevState) => !prevState)
	}
    const sendEditedEducationDataToStoreHandler=()=>{
        dispatch(resumeActions.editEducaion(education.value))
        navigate('/education',{replace:true})
    }
    return (
        <div className='main-funnel'>
			<h1 className='h1'> Edit education</h1>
			<p className='p'>Where did you go to school?</p>
			<div className='add-education-input-div'>
				<label>School Name</label>
				<input
					type='text'
					className='add-education-input'
					maxLength='25'
					name='school'
					value={education.value.school}
					onChange={education.onChange}
				/>
			</div>
			<div className='add-education-input-div'>
				<label>City</label>
				<input
					type='text'
					className='add-education-input group'
					name='city'
					value={education.value.city}
					onChange={education.onChange}
				/>
			</div>
			{showCountry && (
				<div className='add-education-input-div'>
					<label>Country</label>
					<input
						type='text'
						className='add-education-input'
						name='country'
						value={education.value.country}
						onChange={education.onChange}
					/>
				</div>
			)}
			<div className='add-show-country'>
				<input type='checkbox' onClick={showCountryHandler} />
				<label>
					<b>Show Country</b>
				</label>
			</div>
			<div className='add-education-input-div select'>
				<label>Degree</label>
				<select
					className='add-education-select'
					name='degree'
					value={education.value.degree}
					onChange={education.onChange}
				>
					<option value='' key='1'>
						Select Your Degree
					</option>
					<option value='High School Diploma' key='2'>
						High School Diploma
					</option>
					{DEGREES.map((degree) => (
						<option value={degree} key={Math.random()}>
							{degree}
						</option>
					))}
				</select>
			</div>
			<div className='add-education-input-div'>
				<label>Field of study</label>
				<input
					type='text'
					className='add-education-input'
					name='fieldOfStudy'
					value={education.value.fieldOfStudy}
					onChange={education.onChange}
				/>
			</div>
			<div>
				<div className='add-start-date'>
					<label className='label'>Graduation Date</label>
					<input
						type='date'
						className='add-education-input date'
						name='date'
						value={education.value.date}
						onChange={education.onChange}
					/>
				</div>
			</div>
			<div className='btn'>
				<Button className='back' onClick={changePage('/education',true)}>
					CANCEL
				</Button>
				<Button className='next' onClick={sendEditedEducationDataToStoreHandler}>
					SAVE
				</Button>
			</div>
		</div>
    );
}

export default EditEducationForm;
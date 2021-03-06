import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Loading from '../components/Loading/Loading'
import NotFoundPage from '../pages/NotFound/NotFoundPage'


function AppRoutes() {
	const ContactPage = React.lazy(() => import('../pages/ContactsPage/ContactPage'))
	const ExperiencePage = React.lazy(() => import('../pages/ExperiencePage/ExperiencePage'))
	const EducationPage = React.lazy(() => import('../pages/EducationPage/EducationPage'))
	const SkillsPage = React.lazy(() => import('../pages/SkillsPage/SkillsPage'))
	const SummaryPage = React.lazy(() => import('../pages/SummaryPage/SummaryPage'))
	const ResumePage = React.lazy(() => import('../pages/ResumePage/ResumePage'))
	const AdditionalEducationPage = React.lazy(() => import('../pages/AdditionalEducationPage/AdditionalEducationPage'))
	const AdditionalExperiencePage = React.lazy(() => import('../pages/AdditionalExperiencePage/AdditionalExperiencePage'))
	const EditSkillsPage = React.lazy(() => import('../pages/EditSkillsPage/EditSkillsPage'))
	const EditExperiencePage = React.lazy(() => import('../pages/EditExperiencePage/EditExperiencePage'))
	const EditEducationPage = React.lazy(() => import('../pages/EditEducationPage/EditEducationPage'))
	return (
		<Suspense fallback={<Loading/>}>
			<Routes>
				<Route path='/' element={<Navigate to ={'/resume'}/>} />
				<Route path='/' element={<Layout />}>
					<Route path='contact/:mode' element={<ContactPage />} />
					<Route path='experience/:mode' element={<ExperiencePage />} />
					<Route path='add-experience' element={<AdditionalExperiencePage />} />
					<Route path='edit-experience' element={<EditExperiencePage />} />
					<Route path='education/:mode' element={<EducationPage />} />
					<Route path='addEdu' element={<AdditionalEducationPage />} />
					<Route path='eduction-edit' element={<EditEducationPage/>} />
					<Route path='skills/:mode' element={<SkillsPage />} />
					<Route path='edit-skills' element={<EditSkillsPage/>} />
					<Route path='summary/:mode' element={<SummaryPage />} />
					<Route path='resume' element={<ResumePage />} />
				</Route>
				<Route path='*' element={<NotFoundPage/>}/>
			</Routes>
		</Suspense>
	)
}

export default AppRoutes

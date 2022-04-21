import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import EditEducationPage from '../pages/EditEducationPage/EditEducationPage'

function AppRoutes() {
	const ContactPage = React.lazy(() => import('../pages/ContactsPage/ContactPage'))
	const ExperiencePage = React.lazy(() => import('../pages/ExperiencePage/ExperiencePage'))
	const EducationPage = React.lazy(() => import('../pages/EducationPage/EducationPage'))
	const SkillsPage = React.lazy(() => import('../pages/SkillsPage/SkillsPage'))
	const SummaryPage = React.lazy(() => import('../pages/SummaryPage/SummaryPage'))
	const ResumePage = React.lazy(() => import('../pages/ResumePage/ResumePage'))
	const AdditionalEducationPage = React.lazy(() => import('../pages/AdditionalEducationPage/AdditionalEducationPage'))
	const AdditionalExperiencePage = React.lazy(() => import('../pages/AdditionalExperiencePage/AdditionalExperiencePage'))
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path='/' element={<Navigate to ={'/contact'}/>} />
				<Route path='/' element={<Layout />}>
					<Route path='contact' element={<ContactPage />} />
					<Route path='experience' element={<ExperiencePage />} />
					<Route path='add-experience' element={<AdditionalExperiencePage />} />
					<Route path='education' element={<EducationPage />} />
					<Route path='addEdu' element={<AdditionalEducationPage />} />
					<Route path='eduction-edit' element={<EditEducationPage/>} />
					<Route path='skills' element={<SkillsPage />} />
					<Route path='summary' element={<SummaryPage />} />
					<Route path='resume' element={<ResumePage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default AppRoutes

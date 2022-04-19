import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'


function AppRoutes() {
	const ContactPage = React.lazy(() => import('../pages/ContactsPage/ContactPage'))
	const ExperiencePage = React.lazy(() => import('../pages/ExperiencePage/ExperiencePage'))
	const EducationPage = React.lazy(() => import('../pages/EducationPage/EducationPage'))
	const SkillsPage = React.lazy(() => import('../pages/SkillsPage/SkillsPage'))
	const SummaryPage = React.lazy(() => import('../pages/SummaryPage/SummaryPage'))
	const ResumePage = React.lazy(() => import('../pages/ResumePage/ResumePage'))
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path='/' element={<Navigate to ={'/contact'}/>} />
				<Route path='/' element={<Layout />}>
					<Route path='contact' element={<ContactPage />} />
					<Route path='experience' element={<ExperiencePage />} />
					<Route path='education' element={<EducationPage />} />
					<Route path='skills' element={<SkillsPage />} />
					<Route path='summary' element={<SummaryPage />} />
					<Route path='resume' element={<ResumePage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default AppRoutes
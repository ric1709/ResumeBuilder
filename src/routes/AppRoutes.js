import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import ResumePreview from '../components/Resume/ResumePreview'

function AppRoutes() {
	const ContactPage = React.lazy(() => import('../pages/ContactPage'))
	const ExperiencePage = React.lazy(() => import('../pages/ExperiencePage'))
	const EducationPage = React.lazy(() => import('../pages/EducationPage'))
	const SkillsPage = React.lazy(() => import('../pages/SkillsPage'))
	const SummaryPage = React.lazy(() => import('../pages/SummaryPage'))
	const ResumePage = React.lazy(() => import('../pages/ResumePage'))
	return (
		<Suspense fallback={<p>Loading...</p>}>
            <ResumePreview/>
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

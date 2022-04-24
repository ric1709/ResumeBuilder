import { useNavigate } from 'react-router-dom'

function useChangePage() {
	const navigate = useNavigate()
	const changePage = (where,then) => {
		return () => navigate(where,{replace:then || false})
	} 
	return changePage
}

export default useChangePage


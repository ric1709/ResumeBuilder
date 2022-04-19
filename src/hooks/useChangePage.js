import { useNavigate } from 'react-router-dom'

function useChangePage() {
	const navigate = useNavigate()
	const changePage = (where) => {
		return () => navigate(where)
	}
	return changePage
}

export default useChangePage

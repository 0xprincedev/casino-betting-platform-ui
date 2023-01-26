import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from 'pages/Home'

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route path="home">
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes

import { Button } from '@mui/material'

import MainLayout from 'layouts/MainLayout'

const Home = () => {
	return (
		<MainLayout title="Casino Games" className="home">
			<div className="container">
				<Button variant="outlined">Create Community</Button>
			</div>
		</MainLayout>
	)
}

export default Home

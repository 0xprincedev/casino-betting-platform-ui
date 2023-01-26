import { useState } from 'react'
import { Button } from '@mui/material'

import SignInModal from 'components/Modal/SignInModal'

const Header = () => {
	const [signInModalOpen, setSignInModalOpen] = useState<boolean>(false)

	return (
		<header className="sticky top-0">
			<SignInModal open={signInModalOpen} closeModal={() => setSignInModalOpen(false)} />
			<div className="container">
				<nav className="flex h-16 items-center justify-end gap-4">
					<Button className="text-primary" onClick={() => setSignInModalOpen(true)}>
						Sign In
					</Button>
					<p>
						<Button variant="contained">Register</Button>
					</p>
				</nav>
			</div>
		</header>
	)
}

export default Header

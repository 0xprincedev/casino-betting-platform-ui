import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import SignInModal from 'components/Modal/SignInModal'
import SignUpModal from 'components/Modal/SignUpModal'

const Header = () => {
	const [signInModalOpen, setSignInModalOpen] = useState<boolean>(false)
	const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false)

	return (
		<header className="sticky top-0 z-10 border-b border-[#90caf940] backdrop-blur-md">
			<SignInModal open={signInModalOpen} closeModal={() => setSignInModalOpen(false)} />
			<SignUpModal open={signUpModalOpen} closeModal={() => setSignUpModalOpen(false)} />
			<div className="container">
				<nav className="flex h-20 items-center gap-4">
					<Link to="/" className="mr-auto">
						<img src="/images/logo.png" alt="" className="h-16" />
					</Link>
					<Button className="text-primary" onClick={() => setSignInModalOpen(true)}>
						Sign In
					</Button>
					<Button variant="contained" onClick={() => setSignUpModalOpen(true)}>
						Register
					</Button>
				</nav>
			</div>
		</header>
	)
}

export default Header

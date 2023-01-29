import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useAccount, useDisconnect } from 'wagmi'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'
import { setSignIn } from 'slices/user'
import axios from 'utils/axios'
import { removeUserFromLocalStorage } from 'utils'
import { shortenAddress } from 'utils'
import SignInModal from 'components/Modal/SignInModal'
import SignUpModal from 'components/Modal/SignUpModal'
import WalletConnectModal from 'components/Modal/WalletConnectModal'

const Header = () => {
	const [signInModalOpen, setSignInModalOpen] = useState<boolean>(false)
	const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false)
	const [walletModalOpen, setWalletModalOpen] = useState<boolean>(false)
	const { address, isConnected } = useAccount()
	const { disconnect } = useDisconnect()

	const dispatch = useAppDispatch()
	const isSignedIn = useAppSelector((state: RootState) => state.user.isSignedIn)

	useEffect(() => {
		;(async () => {
			const token = localStorage.getItem('token')
			const email = localStorage.getItem('email')
			if (token && email) {
				try {
					await axios.post('/auth/verify-token', { token, email })
					dispatch(setSignIn(true))
				} catch (err) {
					dispatch(setSignIn(false))
				}
			} else {
				dispatch(setSignIn(false))
			}
		})()
	}, [])

	const handleRequestSignIn = () => {
		setSignUpModalOpen(false)
		setSignInModalOpen(true)
	}

	const handleRequestSignUp = () => {
		setSignInModalOpen(false)
		setSignUpModalOpen(true)
	}

	const handleSignOut = () => {
		removeUserFromLocalStorage()
		dispatch(setSignIn(false))
	}

	const handleConnectWallet = () => {
		if (isConnected) {
			disconnect()
			return
		}
		setWalletModalOpen(true)
	}

	return (
		<header className="sticky top-0 z-10 border-b border-[#90caf940] backdrop-blur-md">
			<SignInModal
				open={signInModalOpen}
				closeModal={() => setSignInModalOpen(false)}
				onRequestSignUp={handleRequestSignUp}
			/>
			<SignUpModal
				open={signUpModalOpen}
				closeModal={() => setSignUpModalOpen(false)}
				onRequestSignIn={handleRequestSignIn}
			/>
			<WalletConnectModal open={walletModalOpen} closeModal={() => setWalletModalOpen(false)} />
			<div className="container">
				<div className="flex h-20 items-center justify-between gap-4">
					<Link to="/">
						<img src="/images/logo.png" alt="" className="h-16" />
					</Link>
					<nav className="flex items-center gap-4">
						{isSignedIn ? (
							<>
								<Button onClick={handleConnectWallet}>
									{!isConnected ? 'Connect Wallet' : shortenAddress(address)}
								</Button>
								<Button onClick={handleSignOut}>Sign Out</Button>
							</>
						) : (
							<>
								<Button onClick={() => setSignInModalOpen(true)}>Sign In</Button>
								<Button variant="contained" onClick={() => setSignUpModalOpen(true)}>
									Register
								</Button>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header

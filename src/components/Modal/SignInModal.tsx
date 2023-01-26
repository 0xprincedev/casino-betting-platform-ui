import { Field, Form } from 'react-final-form'
import { Button, IconButton, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import GoogleIcon from '@mui/icons-material/Google'

import InputForm from 'components/Form/InputForm'

interface Props {
	open: boolean
	closeModal: () => void
}

const SignInModal = (props: Props) => {
	const { open, closeModal } = props

	const handleSignIn = (val: any) => {
		console.log(val)
	}

	const handleLoginWithGoogle = () => {
		console.log('123')
	}

	const handleForgotPassword = () => {
		console.log('123')
	}

	const handleRegisterAccount = () => {
		console.log('123')
	}

	return (
		<Modal open={open} onClose={closeModal}>
			<div className="modal__content">
				<div className="absolute top-2 right-2" onClick={closeModal}>
					<IconButton>
						<CloseIcon fontSize="small" />
					</IconButton>
				</div>
				<h1 className="title text-center font-medium">Sign In</h1>
				<Form
					onSubmit={handleSignIn}
					render={({ handleSubmit }) => (
						<form onSubmit={handleSubmit} autoComplete="off" className="mt-8 grid gap-6">
							<Field name="email" label="E-mail" required>
								{(props) => <InputForm type="email" {...props} />}
							</Field>
							<Field name="password" label="Password" required>
								{(props) => <InputForm type="password" {...props} />}
							</Field>
							<Button type="submit" variant="contained">
								Sign In
							</Button>
						</form>
					)}
				/>
				<div className="relative mt-4 flex items-center justify-center gap-2">
					<div className="h-px w-24 bg-primary" />
					OR
					<div className="h-px w-24 bg-primary" />
				</div>
				<div
					className="mx-auto mt-2 flex h-10 w-28 cursor-pointer items-center justify-center rounded bg-secondary"
					onClick={handleLoginWithGoogle}
				>
					<GoogleIcon />
				</div>
				<div className="mx-auto mt-4 flex justify-center">
					<p
						className="cursor-pointer text-sm font-medium text-primary hover:text-white"
						onClick={handleForgotPassword}
					>
						Forgot Password
					</p>
				</div>
				<p className="mt-4 text-center text-sm">
					<small>Don't have an account?</small>{' '}
					<span className="cursor-pointer font-medium underline" onClick={handleRegisterAccount}>
						Register an Account
					</span>
				</p>
			</div>
		</Modal>
	)
}

export default SignInModal

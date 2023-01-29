import { useState } from 'react'
import { Field, Form } from 'react-final-form'
import { toast } from 'react-toastify'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import LoadingButton from '@mui/lab/LoadingButton'
import CloseIcon from '@mui/icons-material/Close'
// import GoogleIcon from '@mui/icons-material/Google'

import axios from 'utils/axios'
import InputForm from 'components/Form/InputForm'

interface Props {
	open: boolean
	closeModal: () => void
	onRequestSignIn: () => void
}

const SignUpModal = (props: Props) => {
	const { open, closeModal, onRequestSignIn } = props
	const [isFetching, setIsFetching] = useState<boolean>(false)

	const handleSignUp = async (val: any) => {
		const { email, username, password } = val

		if (username.length < 3) {
			toast.error('Username must be at least 3 characters long')
			return
		}
		if (password.length < 6) {
			toast.error('Password must be at least 6 characters long')
			return
		}
		setIsFetching(true)
		try {
			await axios.post('/auth/sign-up', { email, username, password })
			toast.success('Successfully created a new account')
			onRequestSignIn()
		} catch (err: any) {
			const { data, status } = err.response
			if (status === 403) {
				toast.error(data.message + ': ' + data.error[0].msg)
			} else {
				toast.error(data.message)
			}
		}
		setIsFetching(false)
	}

	// const handleSignUpWithGoogle = () => {
	// 	console.log('123')
	// }

	const handleRequestSignIn = () => {
		onRequestSignIn()
	}

	return (
		<Modal open={open} onClose={closeModal}>
			<div className="modal__content">
				<div className="absolute top-2 right-2" onClick={closeModal}>
					<IconButton>
						<CloseIcon fontSize="small" />
					</IconButton>
				</div>
				<h1 className="title text-center font-medium">Sign Up</h1>
				<Form
					onSubmit={handleSignUp}
					render={({ handleSubmit }) => (
						<form onSubmit={handleSubmit} autoComplete="off" className="mt-8 grid gap-6">
							<Field name="email" label="E-mail" required>
								{(props) => <InputForm type="email" {...props} />}
							</Field>
							<Field name="username" label="Username" required>
								{(props) => (
									<InputForm helperText="Username must be at least 3 characters long" {...props} />
								)}
							</Field>
							<Field name="password" label="Password" required>
								{(props) => (
									<InputForm
										type="password"
										helperText="Password must be at least 6 characters long"
										{...props}
									/>
								)}
							</Field>
							<LoadingButton type="submit" variant="contained" loading={isFetching}>
								Sign Up
							</LoadingButton>
						</form>
					)}
				/>
				{/* <div className="relative mt-4 flex items-center justify-center gap-2">
					<div className="h-px w-24 bg-primary" />
					OR
					<div className="h-px w-24 bg-primary" />
				</div>
				<div
					className="mx-auto mt-2 flex h-10 w-28 cursor-pointer items-center justify-center rounded bg-secondary"
					onClick={handleSignUpWithGoogle}
				>
					<GoogleIcon />
				</div> */}
				<p className="mt-4 text-center text-sm">
					<small>Already have an account?</small>{' '}
					<span className="cursor-pointer font-medium underline" onClick={handleRequestSignIn}>
						Sign In
					</span>
				</p>
			</div>
		</Modal>
	)
}

export default SignUpModal

import { ChangeEvent, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface Props {
	component?: 'input' | 'textarea'
	variant?: 'outlined' | 'filled' | 'standard'
	type?: 'text' | 'password' | 'email'
	input: any
	meta: any
	label?: string
	name?: string
	required?: boolean
	rows?: number
	pipe?: (arg: string | number) => void
}

const InputForm = (props: Props) => {
	const {
		component = 'input',
		variant = 'outlined',
		type = 'text',
		input,
		label,
		name,
		required,
		rows,
		pipe,
	} = props

	const [showPassword, setShowPassword] = useState<boolean>(false)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		input.onChange(pipe ? pipe(event.target.value) : event.target.value)
	}

	return (
		<TextField
			autoComplete="off"
			variant={variant}
			type={showPassword ? 'text' : type}
			label={label}
			name={name}
			required={required}
			multiline={component === 'textarea'}
			rows={rows}
			onChange={handleInputChange}
			InputProps={{
				endAdornment:
					type === 'password' ? (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => setShowPassword((prev) => !prev)}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					) : (
						<></>
					),
			}}
			{...props}
		/>
	)
}

export default InputForm

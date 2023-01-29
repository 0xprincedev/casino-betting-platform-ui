import { ChangeEvent, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
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
	helperText?: string
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
		helperText = '',
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
			helperText={helperText}
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
		/>
	)
}

export default InputForm

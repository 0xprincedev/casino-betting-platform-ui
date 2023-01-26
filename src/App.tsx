import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import AppRoutes from 'routes'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/app.css'

const theme = createTheme({
	typography: {
		button: {
			textTransform: 'none',
			fontFamily: 'Poppins',
		},
		fontSize: 14,
		fontFamily: 'Poppins',
	},
	breakpoints: {
		values: {
			xs: 576,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1536,
		},
	},
	palette: {
		mode: 'dark',
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<AppRoutes />
			</div>
		</ThemeProvider>
	)
}

export default App

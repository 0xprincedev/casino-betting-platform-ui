import { ToastContainer } from 'react-toastify'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { createClient, configureChains, mainnet, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

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

const { chains, provider, webSocketProvider } = configureChains(
	[mainnet],
	[alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()]
)

// Set up client
const client = createClient({
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({ chains }),
		new CoinbaseWalletConnector({
			chains,
			options: {
				appName: 'wagmi',
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				qrcode: true,
			},
		}),
		// new InjectedConnector({
		// 	chains,
		// 	options: {
		// 		name: 'Injected',
		// 		shimDisconnect: true,
		// 	},
		// }),
	],
	provider,
	webSocketProvider,
})

const App = () => {
	return (
		<WagmiConfig client={client}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="App">
					<AppRoutes />
				</div>
				<ToastContainer autoClose={2000} closeOnClick pauseOnHover={false} theme="dark" />
			</ThemeProvider>
		</WagmiConfig>
	)
}

export default App

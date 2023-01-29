import Button from '@mui/material/Button'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

import MainLayout from 'layouts/MainLayout'

const Home = () => {
	return (
		<MainLayout title="Decentralized P2P Betting Platform">
			<section className="relative -mt-20 grid h-[calc(100vh-1px)] grid-cols-2 md:grid-cols-1 md:grid-rows-2">
				<div className="absolute top-32 z-10 flex w-full flex-col items-center">
					<div className="rounded-lg p-6 backdrop-blur-md">
						<h1 className="text-center text-6xl font-semibold text-primary sm:text-4xl xs:text-2xl">
							Bank It App and Token
						</h1>
						<p className="mt-4 text-center text-xl sm:text-lg">
							The 1st decentralized peer 2 peer betting platform
						</p>
					</div>
				</div>
				<div className="relative z-[1] flex justify-center bg-[url('/public/images/background-1.png')] bg-cover">
					<Button
						className="!absolute top-2/3 left-1/2 h-24 w-96 -translate-x-1/2 -translate-y-1/2 !rounded-full !text-4xl md:top-full md:translate-y-0 md:!border-none md:!bg-theme xs:w-80"
						variant="outlined"
					>
						Custom bet
						<SportsEsportsIcon fontSize="large" sx={{ marginLeft: '12px' }} />
					</Button>
				</div>
				<div className="relative flex justify-center bg-[url('/public/images/betting-live.png')] bg-cover">
					<Button
						className="!absolute top-2/3 left-1/2 h-24 w-96 -translate-x-1/2 -translate-y-1/2 !rounded-full !border-none !bg-theme !text-4xl md:top-1/2 xs:w-80"
						variant="outlined"
					>
						Sports bet
						<SportsEsportsIcon fontSize="large" sx={{ marginLeft: '12px' }} />
					</Button>
				</div>
			</section>
		</MainLayout>
	)
}

export default Home

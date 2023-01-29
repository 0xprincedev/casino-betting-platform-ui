import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
	return (
		<div className="fixed top-0 left-0 z-[10000] flex h-screen w-screen items-center justify-center bg-[#0008]">
			<CircularProgress />
		</div>
	)
}

export default Loading

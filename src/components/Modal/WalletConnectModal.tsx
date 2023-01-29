import { useEffect } from 'react'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useAccount, useConnect } from 'wagmi'
import Button from '@mui/material/Button'

import { ReactComponent as MetamaskIcon } from 'icons/metamask.svg'
import { ReactComponent as CoinbaseIcon } from 'icons/coinbase.svg'
import { ReactComponent as WalletConnectIcon } from 'icons/walletconnect.svg'
import { toast } from 'react-toastify'

interface Props {
	open: boolean
	closeModal: () => void
}

const icons = [
	<MetamaskIcon className="h-8 w-8" key={0} />,
	<CoinbaseIcon className="h-8 w-8" key={1} />,
	<WalletConnectIcon className="h-8 w-8" key={2} />,
]

const WalletConnectModal = (props: Props) => {
	const { open, closeModal } = props
	const { address } = useAccount()
	const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

	useEffect(() => {
		if (address) {
			closeModal()
		}
	}, [address])

	useEffect(() => {
		if (error) {
			toast.error(error.message)
		}
	}, [error])

	return (
		<Modal open={open} onClose={closeModal}>
			<div className="modal__content max-w-md">
				<div className="absolute top-2 right-2" onClick={closeModal}>
					<IconButton>
						<CloseIcon fontSize="small" />
					</IconButton>
				</div>
				<h1 className="title">Connect to wallet</h1>
				<div className="mt-4 grid gap-4">
					{connectors.map((connector: any, index: number) => (
						<Button
							disabled={!connector.ready}
							key={connector.id}
							onClick={() => connect({ connector })}
							variant="outlined"
							className="!flex !items-center !justify-start gap-2 !py-2 !px-3 !text-lg"
						>
							{icons[index]}
							{connector.name}
							{!connector.ready && ' (unsupported)'}
							{isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
						</Button>
					))}
				</div>
			</div>
		</Modal>
	)
}

export default WalletConnectModal

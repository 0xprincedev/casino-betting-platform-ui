import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

interface Props {
	children?: React.ReactNode
	className?: string
	title: string
}

const MainLayout = (props: Props) => {
	const { children, className = '', title } = props
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<div className="w-screen h-screen flex">
				<Sidebar />
				<div className="h-screen w-full flex flex-col overflow-x-hidden overflow-y-auto">
					<Header />
					<main className={`${className} grow`}>{children}</main>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default MainLayout

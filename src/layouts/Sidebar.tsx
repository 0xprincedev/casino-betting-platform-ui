import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<aside className="w-64 flex-shrink-0 border-r border-[#90caf940]">
			<Link to="/">{/* <img src="/images/logo.png" alt="Logo" className="logo" /> */}</Link>
			<nav>123</nav>
		</aside>
	)
}

export default Sidebar

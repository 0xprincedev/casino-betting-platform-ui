import { Link } from 'react-router-dom'

import { links } from 'config/footer'

const Footer = () => {
	return (
		<footer className="h-10">
			<div className="container">
				<nav className="flex h-10 items-center justify-center gap-8">
					{links.map((link, index) => (
						<Link to={link.to} key={index} className="text-primary underline hover:opacity-75">
							{link.name}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	)
}

export default Footer

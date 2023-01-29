import { Link } from 'react-router-dom'

import { links } from 'config/footer'

const Footer = () => {
	return (
		<footer className="mt-auto hidden h-10">
			<div className="container">
				<nav className="flex h-10 flex-wrap items-center justify-center gap-x-8 sm:gap-x-4">
					{links.map((link, index) => (
						<Link
							to={link.to}
							key={index}
							className="text-primary underline hover:opacity-75 sm:text-sm"
						>
							{link.name}
						</Link>
					))}
				</nav>
			</div>
		</footer>
	)
}

export default Footer

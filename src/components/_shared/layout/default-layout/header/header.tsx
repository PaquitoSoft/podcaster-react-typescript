import { Link } from 'react-router-dom';

import './header.css';

function Header() {
	return (
		<header className="header">
			<h1>
				<Link to="/">Podcaster</Link>
				<div className="spinner hidden">
					<div className="double-bounce1"></div>
					<div className="double-bounce2"></div>
				</div>
			</h1>
		</header>
	);
}

export default Header;

import { Link } from 'react-router-dom';

import './header.css';

type Props = {
	showLoader: boolean
};

function Header({ showLoader }: Props) {
	return (
		<header className="header">
			<h1>
				<Link to="/">Podcaster</Link>
				<div 
					className={`spinner ${showLoader ? '' : 'hidden' }`}
					data-testid="loader-indicator"
				>
					<div className="double-bounce1"></div>
					<div className="double-bounce2"></div>
				</div>
			</h1>
		</header>
	);
}

export default Header;

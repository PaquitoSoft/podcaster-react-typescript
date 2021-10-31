import { useLoader } from '../../../../app/application-providers/application-providers';

import Link from '../../../link/link';

import './header.css';

function Header() {
	const { isLoading } = useLoader();
	return (
		<header className="header">
			<h1>
				<Link to="/">Podcaster</Link>
				<div 
					className={`header__spinner header__spinner--${isLoading ? 'on' : 'off' }`}
					data-testid="loader-indicator"
				>
					<div className="header__double-bounce1"></div>
					<div className="header__double-bounce2"></div>
				</div>
			</h1>
		</header>
	);
}

export default Header;

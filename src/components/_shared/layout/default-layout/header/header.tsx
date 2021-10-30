import Link from '../../../link/link';
import { useLoader } from '../../../loader-provider/loader-provider';

import './header.css';

function Header() {
	const { isLoading } = useLoader();

	return (
		<header className="header">
			<h1>
				<Link to="/">Podcaster</Link>
				<div
					className={`spinner ${isLoading ? '' : 'hidden' }`}
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

import Header from "./header/header";
import ErrorMessage from "./error-message/error-message";

import './default-layout.css';

type Props = {
	children: JSX.Element | JSX.Element[],
	className?: string,
	error?: Error
};

function Layout({ children, className, error }: Props) {
	return (
		<div id="app" className="layout">
			<Header />
			{error && <ErrorMessage error={error} />}

			<main className={`main-content ${className || ''}`}>{children}</main>
		</div>
	);
}

export default Layout;

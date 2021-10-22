import Header from "./header/header";
import ErrorMessage from "./error-message/error-message";

import './default-layout.css';

type Props = {
	children: JSX.Element | JSX.Element[],
	className?: string,
	isLoading?: boolean,
	error?: Error
};

function Layout({ children, className, error, isLoading = false }: Props) {
	return (
		<div id="app" className="layout">
			<Header showLoader={isLoading} />
			{error && <ErrorMessage error={error} />}

			<main className={`main-content ${className || ''}`}>{children}</main>
		</div>
	);
}

export default Layout;

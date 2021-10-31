import Header from "./header/header";
import ErrorMessage from "./error-message/error-message";

import './default-layout.css';

type Props = {
	children: JSX.Element | JSX.Element[],
	className?: string,
	hasSidebar?: boolean,
	isLoading?: boolean,
	error?: Error
};

function Layout({ children, className, error, hasSidebar = false, isLoading = false }: Props) {
	return (
		<div id="app" className={`layout`}>
			<Header showLoader={isLoading} />
			{error && <ErrorMessage error={error} />}
			{!error && <main className={`layout__main-content ${hasSidebar ? 'layout__main-content--with-sidebar' : ''} ${className || ''}`}>{children}</main>}
		</div>
	);
}

export default Layout;

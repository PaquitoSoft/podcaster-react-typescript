import Header from "./header/header";
import ErrorMessage from "./error-message/error-message";

import './default-layout.css';
import { useGenericError } from "../../../app/application-providers/application-providers";
import Footer from "./footer/footer";

type Props = {
	children: JSX.Element | JSX.Element[],
	className?: string,
	hasSidebar?: boolean
};

function Layout({ children, className, hasSidebar = false }: Props) {
	const { error, resetError } = useGenericError();
	return (
		<div id="app" className={`layout`}>
			<Header />
			{error && <ErrorMessage error={error} onClose={resetError} />}
			{!error && <main className={`layout__main-content ${hasSidebar ? 'layout__main-content--with-sidebar' : ''} ${className || ''}`}>{children}</main>}
			<Footer />
		</div>
	);
}

export default Layout;

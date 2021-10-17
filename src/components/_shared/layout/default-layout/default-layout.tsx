import Header from "./header/header";

import './default-layout.css';

type Props = {
	children: JSX.Element | JSX.Element[],
	className?: string
};

function Layout({ children, className }: Props) {
	return (
		<div id="app">
			<Header />

			<main className={`main-content ${className || ''}`}>{children}</main>
		</div>
	);
}

export default Layout;

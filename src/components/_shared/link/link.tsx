import { Link as RRLink } from 'react-router-dom';

import './link.css';

export enum LinkType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
};

export enum LinkDecoration {
	UNDERLINE = 'underline',
	NONE = 'none'
}

type Props = {
	to: string;
	children: JSX.Element | JSX.Element[] | string;
	type?: LinkType;
	decoration?: LinkDecoration;
};

const Link = ({
	to,
	children,
	type = LinkType.PRIMARY,
	decoration = LinkDecoration.NONE,
	...rest
}: Props) => {
	return (
		<RRLink
			className={`link link--type-${type} link--decoration-${decoration}`}
			to={to}
			{...rest}
		>
			{children}
		</RRLink>
	)
}

export default Link;

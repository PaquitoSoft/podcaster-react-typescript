import { useCallback } from "react";
import { useRouter } from "../router/router";

const Link = (props: any) => {
	const { to, children, ...rest } = props;
	const { navigateTo } = useRouter();
	const navigate = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		navigateTo(to);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [to]);
	return (<a href={to} onClick={navigate} {...rest}>{children}</a>);
};

export default Link;

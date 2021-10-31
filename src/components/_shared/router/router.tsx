import { createContext, useContext, useEffect } from "react";
import useRouterInternal, { RouteViewProps, RouteConfig } from "./use-router-internal";

const RouterContext = createContext({
	request: {},
	navigateTo: (url: string) => { return }
});

RouterContext.displayName = 'RouterContext';

type ProviderProps = {
	configuration: RouteConfig[];
	splashScreenComponent: React.FC;
	pageNotFoundComponent: React.FC;
};

export const Router = ({
	configuration,
	splashScreenComponent,
	pageNotFoundComponent
}: ProviderProps) => {
	const { state: { navigationContext }, actions: { navigateTo } } = useRouterInternal({
		routerConfiguration: configuration,
		splashScreenComponent,
		pageNotFoundComponent
	});

	useEffect(() => {
		navigateTo(window.location.href);
	}, [navigateTo]);

	const View = navigationContext.currentComponent as React.FC<RouteViewProps>;
	return (
		<RouterContext.Provider 
			value={{
				request: navigationContext.request,
				navigateTo
			}}
		>
			<View remoteData={navigationContext.remoteData} request={navigationContext.request} />
		</RouterContext.Provider>
	)
};

export const useRouter = () => {
	const context = useContext(RouterContext);

	if (!context) {
		throw new Error('useLoader must be used within a RouterContext');
	}

	return context;
};

export type { RouteViewProps };

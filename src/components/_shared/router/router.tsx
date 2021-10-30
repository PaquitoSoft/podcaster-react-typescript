import { createContext, useCallback, useContext, useEffect, useState } from "react";
import UrlPattern from "url-pattern";
import Dictionary from "../../../types/dictionary-type";
import { useLoader } from "../loader-provider/loader-provider";

const RouterContext = createContext({
	navigateTo: (url: string) => { return }
});

RouterContext.displayName = 'RouterContext';

export type RequestInfo = {
	url: string;
	searchParams: Dictionary<string>;
	pathParams?: Dictionary<string>;
};

export type RouteViewProps = {
	remoteData: any;
	request: RequestInfo;
};

export interface AsyncComponent extends React.FC<RouteViewProps> {
	fetchData?: ({ url, pathParams, searchParams }: {
		url: string;
		pathParams: Dictionary<string>,
		searchParams: Dictionary<string>
	}) => Promise<any>
}

type RouteConfig = {
	pattern: string;
	component: AsyncComponent;
}

type ProviderProps = {
	configuration: RouteConfig[];
	splashScreenComponent: React.FC;
	pageNotFoundComponent: React.FC;
};

type MatchedComponent = {
	component: AsyncComponent;
	pathParams: Dictionary<string>;
}

type NavigationContext = {
	currentComponent?: AsyncComponent;
	remoteData?: any;
	request: RequestInfo;
};


const matchComponent = (urlPath: string, routesConfig: RouteConfig[]): MatchedComponent | null => {
	let component, pathParams;
	for (let index = 0, len = routesConfig.length; index < len; index++) {
		const pattern = new UrlPattern(routesConfig[index].pattern);
		const match = pattern.match(urlPath);
		if (match) {
			component = routesConfig[index].component;
			pathParams = match
			break;
		}
	}

	return component ? { component, pathParams } : null;
}

export const Router = ({ configuration, splashScreenComponent, pageNotFoundComponent }: ProviderProps) => {
	const [navigationContext, setNavigationContext] = useState<NavigationContext>({
		currentComponent: splashScreenComponent,
		request: {
			url: window.location.href,
			searchParams: Object.fromEntries(new URLSearchParams(window.location.search))
		}
	});
	const { startLoader, stopLoader } = useLoader();

	const navigateTo = useCallback((url: string) => {
		startLoader();
		const newUrl = new URL(url, !url.startsWith('http') ? `${window.location.protocol}//${window.location.hostname}` : undefined);
		const match = matchComponent(newUrl.pathname, configuration);
		const requestInfo = {
			url,
			searchParams: Object.fromEntries(newUrl.searchParams),
		};
		if (match) {
			if (match.component.fetchData) {
				match.component.fetchData({
					url: newUrl.href,
					pathParams: match.pathParams,
					searchParams: requestInfo.searchParams
				})
					.then(data => {
						setNavigationContext({
							currentComponent: match.component,
							remoteData: data,
							request: {
								...requestInfo,
								pathParams: match.pathParams
							}
						})
						window.history.pushState(null, '', url);
						window.scrollTo({top: 0, behavior: 'smooth'})
					})
					.catch(error => {
						console.error('Navigation error:', error);
					})
					.finally(stopLoader);
			} else {
				setNavigationContext({
					currentComponent: match.component,
					request: {
						...requestInfo,
						pathParams: match.pathParams
					}
				});
				window.history.pushState(null, '', url);
				window.scrollTo({top: 0, behavior: 'smooth'})
				stopLoader();
			}
		} else {
			setNavigationContext({
				currentComponent: pageNotFoundComponent,
				request: requestInfo 
			});
			window.scrollTo({top: 0, behavior: 'smooth'})
			stopLoader();
		}
	}, [startLoader, configuration, stopLoader, pageNotFoundComponent]);

	useEffect(() => {
		navigateTo(window.location.href);
	}, [navigateTo]);

	const View = navigationContext.currentComponent as React.FC<RouteViewProps>;
	return (
		<RouterContext.Provider 
			value={{
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

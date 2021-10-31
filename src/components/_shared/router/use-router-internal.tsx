import { useCallback, useEffect, useState } from "react";
import UrlPattern from "url-pattern";
import Dictionary from "../../../types/dictionary-type";
import { useLoader } from "../loader-provider/loader-provider";

export type RequestInfo = {
	url: string;
	searchParams: Dictionary<string>;
	pathParams?: Dictionary<string>;
};

export type RouteViewProps = {
	remoteData: any;
	request: RequestInfo;
};

export type RouteConfig = {
	pattern: string;
	component: AsyncComponent;
}

export interface AsyncComponent extends React.FC<RouteViewProps> {
	fetchData?: ({ url, pathParams, searchParams }: {
		url: string;
		pathParams: Dictionary<string>,
		searchParams: Dictionary<string>
	}) => Promise<any>
}

type HookProps = {
	routerConfiguration: RouteConfig[];
	splashScreenComponent: React.FC;
	pageNotFoundComponent: React.FC;
};

type HookResult = {
	state: { navigationContext: NavigationContext },
	actions: { navigateTo: (url: string) => void }
};

type NavigationContext = {
	currentComponent?: AsyncComponent;
	remoteData?: any;
	request: RequestInfo;
};

type MatchedComponent = {
	component: AsyncComponent;
	pathParams: Dictionary<string>;
}

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

const useRouter = ({
	routerConfiguration,
	splashScreenComponent,
	pageNotFoundComponent
}: HookProps): HookResult => {
	const [navigationContext, setNavigationContext] = useState<NavigationContext>({
		currentComponent: splashScreenComponent,
		request: {
			url: window.location.href,
			searchParams: Object.fromEntries(new URLSearchParams(window.location.search))
		}
	});
	const { startLoader, stopLoader } = useLoader();

	const endNavigation = useCallback((ctx: NavigationContext) => {
		setNavigationContext(ctx)
		stopLoader();
		window.history.pushState(null, '', ctx.request.url);
		window.scrollTo({top: 0, behavior: 'smooth'})
	}, [stopLoader]);

	const navigateTo = useCallback((url: string) => {
		startLoader();
		const newUrl = new URL(url, !url.startsWith('http') ? `${window.location.protocol}//${window.location.hostname}` : undefined);
		const match = matchComponent(newUrl.pathname, routerConfiguration);
		const requestInfo = {
			url,
			searchParams: Object.fromEntries(newUrl.searchParams),
		};
		if (match) {
			// View might not need remote data
			if (match.component.fetchData) {
				match.component.fetchData({
					url: newUrl.href,
					pathParams: match.pathParams,
					searchParams: requestInfo.searchParams
				})
					.then(data => {
						endNavigation({
							currentComponent: match.component,
							remoteData: data,
							request: {
								...requestInfo,
								pathParams: match.pathParams
							}
						});
					})
					.catch(error => {
						// TODO: Handle error
						console.error('Navigation error:', error);
					})
			} else {
				endNavigation({
					currentComponent: match.component,
					request: {
						...requestInfo,
						pathParams: match.pathParams
					}
				});
			}
		} else {
			endNavigation({
				currentComponent: pageNotFoundComponent,
				request: requestInfo 
			});
		}
	}, [startLoader, routerConfiguration, endNavigation, pageNotFoundComponent]);

	useEffect(() => {
		navigateTo(window.location.href);
	}, [navigateTo]);

	return {
		state: { navigationContext },
		actions: { navigateTo }
	};
};

export default useRouter;

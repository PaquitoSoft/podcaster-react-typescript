import { LoaderProvider } from "../_shared/loader-provider/loader-provider";
import PodcastsListView from '../podcasts-list-view/podcasts-list-view';
import PodcastDetailView from "../podcast-detail-view/podcast-detail-view";
import EpisodeDetailView from "../episode-detail-view/episode-detail-view";
import { Router } from "../_shared/router/router";


const SplashScreenComponent = () => (<div><h1>Initializing application...</h1></div>);
const PageNotFound = () => (<div><h1>Page Not Found</h1></div>);

const routerConfiguration = [
	{
		pattern: '/podcast/:podcastId/episode/:episodeId',
		component: EpisodeDetailView
	},
	{
		pattern: '/podcast/:podcastId',
		component: PodcastDetailView
	},
	{
		pattern: '/',
		component: PodcastsListView
	}
];

function App() {
	return (
		<LoaderProvider>
			<Router
				pageNotFoundComponent={PageNotFound}
				splashScreenComponent={SplashScreenComponent}
				configuration={routerConfiguration}
			/>
		</LoaderProvider>
	);
}

export default App;

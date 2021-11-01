import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import ApplicationProviders from "./application-providers/application-providers";
import PodcastsListView from '../podcasts-list-view/podcasts-list-view';
import PodcastDetailView from "../podcast-detail-view/podcast-detail-view";
import EpisodeDetailView from "../episode-detail-view/episode-detail-view";
import Dictionary from "../../types/dictionary-type";

type Props = {
	initialLocale: string;
	initialTranslations: Dictionary<string>;
};

function App({ initialLocale, initialTranslations }: Props) {
	return (
		<ApplicationProviders
			initialLocale={initialLocale}
			initialTranslations={initialTranslations}
		>
			<Router>
				<Switch>
					<Route path="/podcast/:podcastId/episode/:episodeId">
						<EpisodeDetailView />
					</Route>
					<Route path="/podcast/:podcastId">
						<PodcastDetailView />
					</Route>
					<Route path="/">
						<PodcastsListView />
					</Route>
				</Switch>
			</Router>
		</ApplicationProviders>
	);
}

export default App;

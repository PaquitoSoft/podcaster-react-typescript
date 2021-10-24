import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import PodcastsListView from '../podcasts-list-view/podcasts-list-view';
import PodcastDetailView from "../podcast-detail-view/podcast-detail-view";
import EpisodeDetailView from "../episode-detail-view/episode-detail-view";

function App() {
	return (
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
	);
}

export default App;

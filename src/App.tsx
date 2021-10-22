import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import PodcastsListView from './components/podcasts-list-view/podcasts-list-view';
import PodcastDetailView from "./components/podcast-detail-view/podcast-detail-view";
import EpisodeDetailView from "./components/episode-detail-view/episode-detail-view";

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

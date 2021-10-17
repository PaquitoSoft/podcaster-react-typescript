import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import PodcastsListView from './components/podcasts-list-view/podcasts-list-view';
import PodcastDetailView from "./components/podcast-detail-view/podcast-detail-view";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/podcast/:podcastId">
					<PodcastDetailView />
				</Route>
				<Route path="/podcast/:podcastId/episode/:episodeId">
					<div>TBD - Podcast episode detail view</div>
				</Route>
				<Route path="/">
					<PodcastsListView />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

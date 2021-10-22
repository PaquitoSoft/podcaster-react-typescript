import PodcastsFilter from "./podcasts-filter/podcasts-filter";
import PodcastCard from "./podcast-card/podcast-card";
import Layout from "../_shared/layout/default-layout/default-layout";

import './podcasts-list-view.css';
import usePodcastsListView from "./use-podcasts-list-view";

function PodcastsListView() {
	const {
		state: {
			podcasts,
			loadError,
			isLoading
		},
		actions: {
			filterPodcasts
		}
	} = usePodcastsListView();

	return (
		<Layout isLoading={isLoading} error={loadError} >
			<div className="podcasts-list-view">
				<PodcastsFilter filteredPodcastsCount={podcasts.length} onFilter={filterPodcasts} />
				<div className="podcasts-list">
					{podcasts.map(podcast => <PodcastCard key={podcast.id} podcast={podcast} />)}
				</div>
			</div>
		</Layout>
	);
}

export default PodcastsListView;

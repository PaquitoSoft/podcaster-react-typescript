import PodcastsFilter from "./podcasts-filter/podcasts-filter";
import PodcastCard from "./podcast-card/podcast-card";
import Layout from "../_shared/layout/default-layout/default-layout";

import usePodcastsListView from "./use-podcasts-list-view";
import { getBestPodcasts } from "../../apis/podcasts-api";
import { RouteViewProps } from "../_shared/router/router";

import './podcasts-list-view.css';

function PodcastsListView({ remoteData }: RouteViewProps) {
	const {
		state: {
			podcasts
		},
		actions: {
			filterPodcasts
		}
	} = usePodcastsListView({ podcasts: remoteData });

	return (
		<Layout error={undefined} >
			<div className="podcasts-list-view">
				<PodcastsFilter filteredPodcastsCount={podcasts.length} onFilter={filterPodcasts} />
				<div className="podcasts-list">
					{podcasts.map(podcast => <PodcastCard key={podcast.id} podcast={podcast} />)}
				</div>
			</div>
		</Layout>
	);
}

PodcastsListView.fetchData = getBestPodcasts;

export default PodcastsListView;

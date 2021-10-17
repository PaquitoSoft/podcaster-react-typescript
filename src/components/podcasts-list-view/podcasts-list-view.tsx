import { useEffect, useState } from "react";

import { getBestPodcasts } from "../../apis/podcasts-api";

import PodcastsFilter from "./podcasts-filter/podcasts-filter";
import PodcastCard from "./podcast-card/podcast-card";
import Podcast from "../../entities/podcast";
import Layout from "../_shared/layout/default-layout/default-layout";

import './podcasts-list-view.css';

function PodcastsListView() {
	const [originalPodcasts, setOriginalPodcasts] = useState<Podcast[]>([]);
	const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const podcasts = await getBestPodcasts();
			setOriginalPodcasts(podcasts);
			setFilteredPodcasts(podcasts);
		};

		fetchData();
	}, []);


	const onFilter = (filterText = '') => {
		setFilteredPodcasts(originalPodcasts.filter(podcast => 
			`${podcast.title.toLowerCase()}_${podcast.author.toLowerCase()}`
				.indexOf(filterText.toLowerCase()) !== -1
		));
	};

	return (
		<Layout>
			<div className="podcasts-list-view">
				<PodcastsFilter filteredPodcastsCount={filteredPodcasts.length} onFilter={onFilter} />
				<div className="podcasts-list">
					{filteredPodcasts.map(podcast => <PodcastCard key={podcast.id} podcast={podcast} />)}
				</div>
			</div>
		</Layout>
	);
}

export default PodcastsListView;

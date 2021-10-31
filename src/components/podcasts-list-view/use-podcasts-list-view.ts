import { useState, useEffect } from 'react';

import Podcast from "../../entities/podcast";
import { getBestPodcasts } from "../../apis/podcasts-api";
import useRemoteData from '../_shared/use-remote-data/use-remote-data';

type HookState = {
	podcasts: Podcast[];
	loadError?: Error;
};

// type HookActions = {
// 	filterPodcasts(event: React.ChangeEvent<HTMLInputElement>): void;
// };
type HookActions = {
	filterPodcasts(event: string): void;
};

type HookResponse = {
	state: HookState;
	actions: HookActions;
};

function usePodcastsListView(): HookResponse {
	const [filterText, setFilterText] = useState('');
	const [originalPodcasts, setOriginalPodcasts] = useState<Podcast[]>([]);
	const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);
	
	const { data: podcasts } = useRemoteData(getBestPodcasts);

	const filterPodcasts = (text: string) => setFilterText(text);
	
	useEffect(() => {
		podcasts && setOriginalPodcasts(podcasts);
	}, [podcasts]);

	useEffect(() => {
		setFilteredPodcasts(originalPodcasts.filter(podcast => 
			`${podcast.title.toLowerCase()}_${podcast.author.toLowerCase()}`
				.indexOf(filterText.toLowerCase()) !== -1
		));
	}, [filterText, originalPodcasts]);

	return {
		state: {
			podcasts: filteredPodcasts
		},
		actions: {
			filterPodcasts
		}
	}
}

export default usePodcastsListView;

import { useState, useEffect } from 'react';

import Podcast from "../../entities/podcast";

type HookState = {
	podcasts: Podcast[];
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

function usePodcastsListView({ podcasts }: { podcasts: Podcast[] }): HookResponse {
	const [filterText, setFilterText] = useState('');
	const [originalPodcasts, setOriginalPodcasts] = useState<Podcast[]>(podcasts);
	const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>(podcasts);
	
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

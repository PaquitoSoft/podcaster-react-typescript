import Podcast from "../entities/podcast";
import LNPodcast from "../types/ln-podcast-type";

import { getData } from "../services/http-request"

// eslint-disable-next-line @typescript-eslint/ban-types
function request(path: string, params: object) {
	const urlParams = new URLSearchParams(Object.entries(params));
	return getData({
		url: `${process.env.REACT_APP_LISTEN_NOTES_API_BASE_URL}${path}?${urlParams.toString()}`,
		headers: {
			'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY!
		},
		ttl: 60 * 24 // 1 day (in minutes)
	})
}

export async function getBestPodcasts(): Promise<Podcast[]> {
	// LN API only returns 20 items per page so we need 5 requests to get top 100 podcasts
	const requests = [...Array(5)].map((_, index) => 
		request('/best_podcasts', {
			genre_id: 134,
			page: index + 1,
			region: 'us'
		})
	)
	const results = await Promise.all(requests);

	return results.reduce((accum, data) => {
		return accum.concat(
			data.podcasts.map((apiPodcast: LNPodcast) => new Podcast(apiPodcast))
		);
	}, []);
}

export async function getPodcastDetail(podcastId: string): Promise<Podcast> {
	const data: LNPodcast = await request(`/podcasts/${podcastId}`, {
		// next_episode_pub_date: 1479154463000,
		sort: 'recent_first'
	});

	return new Podcast(data);
}

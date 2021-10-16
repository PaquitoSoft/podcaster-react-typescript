import LNEpisode from "./ln-episode-type";

type LNPodcast = {
	country: string;
	description: string;
	earliest_pub_date_ms: number;
	explicit_content: boolean;
	genre_ids: number[];
	id: string;
	image: string;
	is_claimed: boolean;
	itunes_id: number;
	language: string;
	latest_pub_date_ms: number;
	listennotes_url: string;
	publisher: string;
	thumbnail: string;
	title: string;
	total_episodes: number;
	type: string;
	website: string;
	episodes: LNEpisode[];
};

export default LNPodcast;

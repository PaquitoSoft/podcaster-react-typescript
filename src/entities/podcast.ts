import LNPodcast from '../types/ln-podcast-type';
import Episode from './episode';

class Podcast {
	id = '';
	title = '';
	description = ''; // is an html string
	author = '';
	thumbnailUrl = '';
	imageUrl = '';
	webUrl = '';
	episodesCount = 0;
	language = '';
	country = '';
	episodes: Episode[] = [];

	constructor(apiPodcast: LNPodcast) {
		this.id = apiPodcast.id;
		this.title = apiPodcast.title;
		this.description = apiPodcast.description;
		this.author = apiPodcast.publisher;
		this.thumbnailUrl = apiPodcast.thumbnail;
		this.imageUrl = apiPodcast.image;
		this.webUrl = apiPodcast.website;
		this.episodesCount = apiPodcast.total_episodes;
		this.language = apiPodcast.language;
		this.country = apiPodcast.country;

		if (apiPodcast.episodes) {
			this.episodes = apiPodcast.episodes.map(apiEpisode => new Episode(apiEpisode));
		}
	}
}

export default Podcast;

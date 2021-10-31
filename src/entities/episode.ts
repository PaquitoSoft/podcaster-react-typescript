import LNEpisode from "../types/ln-episode-type";

class Episode {
	id = '';
	title = '';
	description = ''; // is an html string
	publishedDate: Date;
	audioUrl = '';
	audioLength = 0; // in seconds
	thumbnailUrl = '';
	imageUrl = '';
	webUrl = '';

	constructor(apiEpisode: LNEpisode) {
		this.id = apiEpisode.id;
		this.title = apiEpisode.title;
		this.description = apiEpisode.description;
		this.publishedDate = new Date(apiEpisode.pub_date_ms);
		this.audioUrl = apiEpisode.audio;
		this.audioLength = apiEpisode.audio_length_sec;
		this.thumbnailUrl = apiEpisode.thumbnail;
		this.imageUrl = apiEpisode.image;
		this.webUrl = apiEpisode.link;
	}
}

export default Episode;

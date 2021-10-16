import LNEpisode from "../types/ln-episode-type";

class Episode {
	id: string = '';
	title: string = '';
	description: string = ''; // is an html string
	publishedDate: number = 0;
	audioUrl: string = '';
	audioLength: number = 0; // in seconds
	thumbnailUrl: string = '';
	imageUrl: string = '';
	webUrl: string = '';

	constructor(apiEpisode: LNEpisode) {
		this.id = apiEpisode.id;
		this.title = apiEpisode.title;
		this.description = apiEpisode.description;
		this.publishedDate = apiEpisode.pub_date_ms;
		this.audioUrl = apiEpisode.audio;
		this.audioLength = apiEpisode.audio_length_sec;
		this.thumbnailUrl = apiEpisode.thumbnail;
		this.imageUrl = apiEpisode.image;
		this.webUrl = apiEpisode.link;
	}
}

export default Episode;

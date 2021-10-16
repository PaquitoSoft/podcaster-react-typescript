type LNEpisode = {
	id: string;
	title: string;
	description: string;
	pub_date_ms: number;
	audio: string;
	audio_length_sec: number;
	listennotes_url: string;
	image: string;
	thumbnail: string;
	maybe_audio_invalid: boolean;
	explicit_content: boolean;
	link: string;
	guid_from_rss: string;
};

export default LNEpisode;

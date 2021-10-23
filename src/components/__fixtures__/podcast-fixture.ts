import Podcast from "../../entities/podcast";

const fakePodcast: Podcast = {
	id: '1s2b3c',
	title: 'My podcast',
	description: 'Super boring chat about nothing',
	author: 'PaquitoSoft',
	thumbnailUrl: 'http://www.nowhere.com/fake-image-thumb',
	imageUrl: 'http://www.nowhere.com/fake-image',
	webUrl: 'http://www.nowhere.com/my-podcast',
	episodesCount: 0,
	language: 'en',
	country: 'GB',
	episodes: []
}

export const getFakePodcast = () => ({...fakePodcast});

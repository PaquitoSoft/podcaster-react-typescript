import Podcast from "../../entities/podcast";
import { getBestPodcastsResponseData } from "./ln-fixtures";

// export const getFakePodcast = () => new Podcast(getBestPodcastsResponseData().podcasts[0]);

const fakePodcast: Podcast = {
	"id": "5ccbe35bcd544235bd506c877c2a0bc1",
	"title": "Gareth Emery: Electric For Life",
	"description": "Electric For Life is the brand new weekly radio show from Gareth Emery",
	"author": "Gareth Emery",
	"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
	"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
	"webUrl": "http://www.electricfor.life?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
	"episodesCount": 141,
	"language": "English",
	"country": "United States",
	"episodes": [
		{
			"id": "61546e1a30f1490a80f914677345bb01",
			"title": "Gareth Emery - Deep Set from Metropolis Festival, New York (30th July 2021)",
			"description": "Gareth Emery - Deep Set from Metropolis Festival, New York (30th July 2021)⁣⁣⁣⁣⁣⁣⁣",
			"publishedDate": 1627912800001,
			"audioUrl": "https://www.listennotes.com/e/p/61546e1a30f1490a80f914677345bb01/",
			"audioLength": 8996,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/Gareth_Emery_-_Deep_Set_from_Metropolis_Festival,_New_York_(30th_July_2021).mp3?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "400acd99bd094ee890d03ae94f98ccd9",
			"title": "Gareth Emery - Main Stage Set from Metropolis Festival, New York (30th July 2021)",
			"description": "Gareth Emery - Main Stage Set from Metropolis Festival, New York (30th July 2021)⁣⁣⁣⁣⁣⁣⁣",
			"publishedDate": 1627912800000,
			"audioUrl": "https://www.listennotes.com/e/p/400acd99bd094ee890d03ae94f98ccd9/",
			"audioLength": 5377,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/Gareth_Emery_-_Main_Stage_Set_from_Metropolis_Festival,_New_York_(30th_July_2021).mp3?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "9b444bcf272046258dbb67db48a103c2",
			"title": "Gareth Emery - Live from We'll Be OK (September 20th 2020)",
			"description": "Full set from our SoCal drive-in..enjoy!⁣⁣⁣⁣⁣⁣⁣",
			"publishedDate": 1602165600000,
			"audioUrl": "https://www.listennotes.com/e/p/9b444bcf272046258dbb67db48a103c2/",
			"audioLength": 8920,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/Gareth_Emery_-_Live_from_We'll_Be_OK_-_California_(September_20th_2020).mp3?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "2d9f7fc861604421913deaee08f7484b",
			"title": "Gareth Emery - High AF @ US Bank Tower (June 13th, 2020)",
			"description": "Last night I played this set from nearly 1,000 feet above ground level in the US Bank Tower in Los Angeles in the highest event space in the Western United States. There's plenty of material from the new album so I thought it was a good one to throw up on the feel. Hope you all enjoy! Gaz",
			"publishedDate": 1592157600001,
			"audioUrl": "https://www.listennotes.com/e/p/2d9f7fc861604421913deaee08f7484b/",
			"audioLength": 7527,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/High_AF_live_from_Los_Angeles.mp3?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "58ab9a7b41ab46adbb0bc9866410252b",
			"title": "Gareth Emery - Elise",
			"description": "song i wrote for my daughter elise",
			"publishedDate": 1586800800000,
			"audioUrl": "https://www.listennotes.com/e/p/58ab9a7b41ab46adbb0bc9866410252b/",
			"audioLength": 220,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/Gareth_Emery_-_Elise.mp4?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "3ad605b9edd54d51948537893e93799e",
			"title": "Gareth Emery feat. Annabel - You'll Be OK (Official Acoustic)",
			"description": "the hundreds of supporters who sent us pictures are the true stars of this video. stay safe and healthy people, and we'll see you soon. xx",
			"publishedDate": 1586196000000,
			"audioUrl": "https://www.listennotes.com/e/p/3ad605b9edd54d51948537893e93799e/",
			"audioLength": 220,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/YT.m4v?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "730f0dd64e474eb59e1ab852b8123549",
			"title": "Gareth Emery - You'll Be OK (feat. Annabel)",
			"description": "a song about some tough times in my life... which feels strangely relevant right now.",
			"publishedDate": 1584122400000,
			"audioUrl": "https://www.listennotes.com/e/p/730f0dd64e474eb59e1ab852b8123549/",
			"audioLength": 220,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/YBOK-MusicVideo-Podcast.mp4?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "cf09d063d27f45a18eb613407a096459",
			"title": "Gareth Emery feat. Emily Vaughn - You Are",
			"description": "NEW SONG! Writing this with Emily Vaughn I really wanted to tap into that feeling I got when I first went raving. Walking into a dark club, deep as f**k music, smoke filling the room... pure anticipation filling the air. Some proper 90s vibes in this one I hope, let me know what you reckon! Gaz x",
			"publishedDate": 1582653600000,
			"audioUrl": "https://www.listennotes.com/e/p/cf09d063d27f45a18eb613407a096459/",
			"audioLength": 192,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/YouAre-LyricVid.mp4?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "88a62758022c44b8bff0eaa21973ecb6",
			"title": "YESTERDAY (NEW SONG 2020)",
			"description": "yesssss! My first release of the year, this is YESTERDAY with NASH feat. Linney. we shot this little teaser when we debuted the track to 6,000 people at Laserface Minneapolis and what a moment it was!",
			"publishedDate": 1576000800000,
			"audioUrl": "https://www.listennotes.com/e/p/88a62758022c44b8bff0eaa21973ecb6/",
			"audioLength": 83,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/Yesterday.mp4?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		},
		{
			"id": "ef60f4019f62421aabd9ed478c819dbb",
			"title": "Gareth Emery feat. Kovic - Somebody (Official Music Video)",
			"description": "So stoked to release this track and video! This song came out of a chance meeting in Los Angeles with amazing UK singer-songwriter Kovic. As well as laying down this song, we also wrote the treatment for the music video that you are watching now. Big love to director Lee Jones and label Monstercat. Enjoy! Gaz x STREAM / BUY / DOWNLOAD: https://monstercat.ffm.to/somebody-gee9",
			"publishedDate": 1575828000000,
			"audioUrl": "https://www.listennotes.com/e/p/ef60f4019f62421aabd9ed478c819dbb/",
			"audioLength": 261,
			"thumbnailUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"imageUrl": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
			"webUrl": "http://podcast.electricfor.life/podcast/Somebody.mp4?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
		}
	]	
};

export const getFakePodcast = () => ({...fakePodcast});

export const getFakePodcastsList = () =>
	getBestPodcastsResponseData().podcasts.map(lnPodcast => new Podcast(lnPodcast));

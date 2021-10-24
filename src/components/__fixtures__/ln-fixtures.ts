import { v4 as randomString } from "uuid";
import LNPodcast from "../../types/ln-podcast-type";

type LNBestPodcastsResponse = {
	id: number;
	name: string;
	parent_id: number;
	podcasts: LNPodcast[];
	total: number;
	has_next: boolean;
	has_previous: boolean;
	page_number: number;
	previous_page_number: number;
	next_page_number: number;
	listennotes_url: string;
}

const fakeLNPodcastsResponse: LNBestPodcastsResponse = {
	"id": 134,
	"name": "Music",
	"parent_id": 67,
	"podcasts": [{
		"id": "5ccbe35bcd544235bd506c877c2a0bc1",
		"title": "Gareth Emery: Electric For Life",
		"publisher": "Gareth Emery",
		"image": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/gareth-emery-electric-for-life-gareth-emery-VsENxgQ2KXP.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/5ccbe35bcd544235bd506c877c2a0bc1/",
		"total_episodes": 141,
		"explicit_content": false,
		"description": "Electric For Life is the brand new weekly radio show from Gareth Emery",
		"itunes_id": 133975014,
		"latest_pub_date_ms": 1627912800001,
		"earliest_pub_date_ms": 1417032000131,
		"language": "English",
		"country": "United States",
		"website": "http://www.electricfor.life?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [67, 134]
	}, {
		"id": "96ffa87362fc4f2f83fd1281bb56a4f0",
		"title": "Presto Music Classical Podcast",
		"publisher": "Presto Music",
		"image": "https://production.listennotes.com/podcasts/presto-music-podcast-presto-music-du4orYzSwhv-ThCwQdyR_6O.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/presto-music-podcast-presto-music-du4orYzSwhv-ThCwQdyR_6O.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/96ffa87362fc4f2f83fd1281bb56a4f0/",
		"total_episodes": 23,
		"explicit_content": false,
		"description": "Conversations from the world of classical music hosted by Presto Music's Paul Thomas. Guests have included artists such as Jess Gillam, Anna Lapwood, Patricia Kopatchinskaja, and respected writers and critics like Rob Cowan, David Hurwitz, Andrew Mellor.Visit us at www.prestomusic.com",
		"itunes_id": 1521510877,
		"latest_pub_date_ms": 1634299200000,
		"earliest_pub_date_ms": 1593500400017,
		"language": "English",
		"country": "United States",
		"website": "https://www.prestomusic.com/classical/articles/presto-music-podcast/browse?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [67, 134, 208]
	}, {
		"id": "90ae1965a3fa46d483a1b57a2120ca54",
		"title": "Jaytech Music Podcast",
		"publisher": "jaytechmusic",
		"image": "https://production.listennotes.com/podcasts/jaytech-music-podcast-jaytechmusic-DLUwBtsvdY7-L9nKkHhNYGB.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/jaytech-music-podcast-jaytechmusic-DLUwBtsvdY7-L9nKkHhNYGB.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/90ae1965a3fa46d483a1b57a2120ca54/",
		"total_episodes": 164,
		"explicit_content": false,
		"description": "A series of mix shows from Australian DJ and producer Jaytech.",
		"itunes_id": 596346899,
		"latest_pub_date_ms": 1633017650000,
		"earliest_pub_date_ms": 1168880400159,
		"language": "English",
		"country": "United States",
		"website": "https://jaytechmusic.podbean.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [67, 134]
	}, {
		"id": "0c39ee6205cb4425847bbd0e08ad28ce",
		"title": "The Cassie Wells Podcast",
		"publisher": "Cassie Wells",
		"image": "https://production.listennotes.com/podcasts/the-cassie-wells-podcast-cassie-wells-lRp0SeknZ8t-0gDsir1QUCI.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/the-cassie-wells-podcast-cassie-wells-lRp0SeknZ8t-0gDsir1QUCI.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/0c39ee6205cb4425847bbd0e08ad28ce/",
		"total_episodes": 62,
		"explicit_content": false,
		"description": "Cassie Wells explores what's new in music from Nashville. Bringing you new music, interviews, and everything in-between.\n\nAre you an artist that wants to be featured on the show or a fan that wants to connect with Cassie? Follow her on Instagram and TikTok @CassieLWells or email her at thecassiewellspodcast@gmail.com.",
		"itunes_id": 1239122087,
		"latest_pub_date_ms": 1629305147000,
		"earliest_pub_date_ms": 1495330516061,
		"language": "English",
		"country": "United States",
		"website": "http://soundcloud.com/thecassiewellspodcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67]
	}, {
		"id": "83ff0e3f12d340a0848acd1d423a8b68",
		"title": "Whiskey Riff Raff",
		"publisher": "Whiskey Riff",
		"image": "https://production.listennotes.com/podcasts/whiskey-riff-raff-whiskey-riff-ZMu68TKqS2k.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/whiskey-riff-raff-whiskey-riff-ZMu68TKqS2k.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/83ff0e3f12d340a0848acd1d423a8b68/",
		"total_episodes": 189,
		"explicit_content": true,
		"description": "\n      <p>A podcast by&nbsp;Whiskey Riff&nbsp;for the country fan. On 'Whiskey Riff Raff,' Steve Gazibara and Wes Langeler give an unfiltered and unapologetic take on country music, life, and all the craziness that comes with it. Laugh with us. Rant with us. Drink with us.</p>\n    ",
		"itunes_id": 1221406139,
		"latest_pub_date_ms": 1634765772000,
		"earliest_pub_date_ms": 1490878844173,
		"language": "English",
		"country": "United States",
		"website": "https://art19.com/shows/whiskey-riff-raff?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67]
	}, {
		"id": "67888dcb20584d56ade27ebf8a686e15",
		"title": "WSM's Coffee, Country & Cody",
		"publisher": "WSM Radio / Gaylord Entertainment Company",
		"image": "https://production.listennotes.com/podcasts/wsms-coffee-country-cody-wsm-radio-gaylord-vbKTH1NW2zA-V0FtjHwC94N.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/wsms-coffee-country-cody-wsm-radio-gaylord-vbKTH1NW2zA-V0FtjHwC94N.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/67888dcb20584d56ade27ebf8a686e15/",
		"total_episodes": 952,
		"explicit_content": false,
		"description": "650 AM WSM made its mark on country music history on October 5, 1925. It was on that day that the station hit the airwaves, and  continues to broadcast the best in classic country music to this day. 650 AM WSM has been the radio home for the Grand Ole Opry for over 82 years. You'll find some of their most popular programming available as podcasts. Includes interviews with country music stars and more.\nÂ© WSM Radio",
		"itunes_id": 251049918,
		"latest_pub_date_ms": 1634832000000,
		"earliest_pub_date_ms": 1175627700952,
		"language": "English",
		"country": "United States",
		"website": "http://www.wsmonline.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67]
	}, {
		"id": "9f4b00530fe546fcbbdf98b79259dec6",
		"title": "Get Real with Caroline Hobby",
		"publisher": "Nashville Podcast Network",
		"image": "https://production.listennotes.com/podcasts/get-real-with-caroline-hobby-nashville-4EcTYnH6fDM-Jsyx2MECl3V.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/get-real-with-caroline-hobby-nashville-4EcTYnH6fDM-Jsyx2MECl3V.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/9f4b00530fe546fcbbdf98b79259dec6/",
		"total_episodes": 314,
		"explicit_content": false,
		"description": "Caroline Hobby got her start in the Country Music scene as a member of the trio Stealing Angels. She then competed and was a finalist twice on CBS’s “The Amazing Race,” and now is an Entertainment Host and Correspondent.  Each week on the podcast, Caroline sits down and talks to the wives of your favorite country artists. In every episode, she gives you an inside look of what it’s like to be married to Luke Bryan, Tyler Hubbard and Brian Kelley of Florida Georgia Line, Kane Brown, Thomas Rhett, Dan and Shay and more!  Being married to front man Michael Hobby of chart topping band A Thousand Horses, she really is able to connect on a personal, soul level with the stories of her guests. She also sits down with female entrepreneurs, influencers and all sorts of fascinating ladies! It’s honest women... honest talk!",
		"itunes_id": 1093664694,
		"latest_pub_date_ms": 1634533200000,
		"earliest_pub_date_ms": 1458087840250,
		"language": "English",
		"country": "United States",
		"website": "https://audioboom.com/channel/hyper-caroline-hobby?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67, 122]
	}, {
		"id": "81e94f4d1ba14a3cb23311f0e4bcd87f",
		"title": "Dipped In Tone",
		"publisher": "Rhett Shull & Zach Broyles",
		"image": "https://production.listennotes.com/podcasts/dipped-in-tone-rhett-shull-zach-broyles-uWDnVf78spc-gBFjk2uWdcZ.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/dipped-in-tone-rhett-shull-zach-broyles-uWDnVf78spc-gBFjk2uWdcZ.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/81e94f4d1ba14a3cb23311f0e4bcd87f/",
		"total_episodes": 49,
		"explicit_content": false,
		"description": "Rhett Shull and Zach Broyles combine their music and gear industry knowledge for this weekly podcast. Together they discuss news, talk gear, debunk myths, and much more.",
		"itunes_id": 1531548700,
		"latest_pub_date_ms": 1633100641000,
		"earliest_pub_date_ms": 1599796954043,
		"language": "English",
		"country": "United States",
		"website": "http://dippedintone.libsyn.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67, 208, 210]
	}, {
		"id": "e3815dd691e24a8a9dea4a77395735fd",
		"title": "The BlackSheep Podcast: Presented by HM Magazine",
		"publisher": "The BlackSheep Podcast",
		"image": "https://production.listennotes.com/podcasts/the-blacksheep-podcast-presented-by-hm-5x7zlQg31pZ-nK-T_dOtkrw.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/the-blacksheep-podcast-presented-by-hm-5x7zlQg31pZ-nK-T_dOtkrw.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/e3815dd691e24a8a9dea4a77395735fd/",
		"total_episodes": 59,
		"explicit_content": false,
		"description": "A podcast for those who wⒶnder in music, faith, culture, and everything in between.",
		"itunes_id": 1224409460,
		"latest_pub_date_ms": 1634644810000,
		"earliest_pub_date_ms": 1565784016056,
		"language": "English",
		"country": "United States",
		"website": "https://hmmagazine.com/podcasts/blacksheep/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [122, 67]
	}, {
		"id": "bcfaff85c8124f028c457236639d6f1b",
		"title": "My Turning Point",
		"publisher": "LiveXLive",
		"image": "https://production.listennotes.com/podcasts/my-turning-point-livexlive-o-wcfvqOIru-OCjpfUDdGor.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/my-turning-point-livexlive-o-wcfvqOIru-OCjpfUDdGor.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/bcfaff85c8124f028c457236639d6f1b/",
		"total_episodes": 101,
		"explicit_content": true,
		"description": "Music journalist Steve Baltin gets personal with major artists and explores the stories behind pivotal moments that changed the course of their careers.",
		"itunes_id": 1474410204,
		"latest_pub_date_ms": 1634540400000,
		"earliest_pub_date_ms": 1564011087097,
		"language": "English",
		"country": "United States",
		"website": "https://www.podcastone.com/pd/My-Turning-Point?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 122, 100, 67]
	}, {
		"id": "6e1b475327a243938cb92337f484c4c4",
		"title": "Backstage Journal Podcast with Rhett Shull",
		"publisher": "Rhett Shull",
		"image": "https://production.listennotes.com/podcasts/backstage-journal-podcast-with-rhett-shull-QjONFiIYb0_-DeLicglo8NT.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/backstage-journal-podcast-with-rhett-shull-QjONFiIYb0_-DeLicglo8NT.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/6e1b475327a243938cb92337f484c4c4/",
		"total_episodes": 48,
		"explicit_content": false,
		"description": "Backstage Journal is a podcast about musicians and their lives on stage & off. Hosted by guitarist/YouTube creator Rhett Shull, each episode features a different guest, from guitarists, producers, songwriters and other content creators.",
		"itunes_id": 1463640779,
		"latest_pub_date_ms": 1617290058000,
		"earliest_pub_date_ms": 1557855914028,
		"language": "English",
		"country": "United States",
		"website": "http://backstagejournal.libsyn.com/podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 100, 94, 93, 67]
	}, {
		"id": "7428b250c302486aaded1ca0cdc3edd9",
		"title": "Interlude: ARMY",
		"publisher": "xCeleste & JoseOchoaTV",
		"image": "https://production.listennotes.com/podcasts/interlude-army-xceleste-joseochoatv-7zDkZeRnJS2-e2m-c4gXiQT.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/interlude-army-xceleste-joseochoatv-7zDkZeRnJS2-e2m-c4gXiQT.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/7428b250c302486aaded1ca0cdc3edd9/",
		"total_episodes": 72,
		"explicit_content": false,
		"description": "\n      <p>A BTS podcast created by ARMY for ARMY. Join Rosan (xCeleste) and Jose (JoseOchoaTV) every week as they talk about what it’s like to be part of the BTS ARMY family. Let’s discuss any and everything BTS, ARMY, and BigHit related from Music, Theories, News to future plans and releases. Like many ARMY, they also have connected virtually through the power that is BTS. Come be a part of that connection! Episodes are uploaded every week, with exclusive content on the Patreon!</p><p>Patreon: https://www.patreon.com/interludearmypodcast</p><p>Host/Producers: Jose Ochoa, Rosan Powierza</p><p>CHEM Productions-</p><p>Producers: Imelda Ibarra, Charlene Pae, Emily Haydel</p><p>Production Assistants: Alyce Milana, Wendy Silva, Tania Suadi</p>\n    ",
		"itunes_id": 1499863843,
		"latest_pub_date_ms": 1634821200000,
		"earliest_pub_date_ms": 1582210800066,
		"language": "English",
		"country": "United States",
		"website": "https://art19.com/shows/interlude-army?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67]
	}, {
		"id": "88891df1489848c7a3dd7c3a4ad6beb0",
		"title": "Adam Beyer presents Drumcode",
		"publisher": "Drumcode",
		"image": "https://production.listennotes.com/podcasts/adam-beyer-presents-drumcode-drumcode-IFYhQU0oqR9-vZ3uPFRI0ph.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/adam-beyer-presents-drumcode-drumcode-IFYhQU0oqR9-vZ3uPFRI0ph.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/88891df1489848c7a3dd7c3a4ad6beb0/",
		"total_episodes": 157,
		"explicit_content": false,
		"description": "Adam Beyer's music is synonymous with all that is exciting about electronic music today. Having emerged as the figure head of the hugely prolific Swedish techno scene Beyer has now confirmed his position as a globally recognized DJ and producer, headlining the world's finest events week in week out. \n\nHis acclaimed Drumcode label has been at the cutting edge of club music for well over a decade; now for the first time Adam takes to the airwaves with a new weekly radio show. \n\nFeaturing exclusive live performances, cutting edge studio mixes, artist profiles and previews of exciting material on the Drumcode labels, this show is set to be a sure fire hit with electronic music fans worldwide.",
		"itunes_id": 413995650,
		"latest_pub_date_ms": 1634702400000,
		"earliest_pub_date_ms": 1540353600099,
		"language": "English",
		"country": "United States",
		"website": "http://www.drumcode.se?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [67, 134]
	}, {
		"id": "e7111e7d7831487eba9007f496d3e060",
		"title": "The Brian Turner Show",
		"publisher": "Brian Turner",
		"image": "https://production.listennotes.com/podcasts/the-brian-turner-show-brian-turner-h8geZL6RD7c-Yf1veBpL4nc.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/the-brian-turner-show-brian-turner-h8geZL6RD7c-Yf1veBpL4nc.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/e7111e7d7831487eba9007f496d3e060/",
		"total_episodes": 39,
		"explicit_content": false,
		"description": "Order and disorder, a freeform haze of garbage guitars, shorted electronics, found detritus, collage, linear songs, sounds from strange lands. Every other week. Full playlists can be found at www.brianturnershow.com. I can be contacted at btradio85@gmail.com.",
		"itunes_id": 1516948989,
		"latest_pub_date_ms": 1633960800000,
		"earliest_pub_date_ms": 1591239600036,
		"language": "English",
		"country": "United States",
		"website": "http://www.brianturnershow.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67]
	}, {
		"id": "66dcc57c4df24fcb87f3de468a5fb016",
		"title": "Music Ed Amplified",
		"publisher": "Missy Strong",
		"image": "https://production.listennotes.com/podcasts/music-ed-amplified-Z1aG3wSp768-7FeUfg6vxbD.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/music-ed-amplified-Z1aG3wSp768-7FeUfg6vxbD.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/66dcc57c4df24fcb87f3de468a5fb016/",
		"total_episodes": 21,
		"explicit_content": false,
		"description": "The Music Ed Amplified podcast is about the ups and downs of teaching music in the real world. Missy engages with multiple music education topics, approaches, and philosophies from her unique perspective as a Feierabend-friendly teacher. Along the way she’ll also talk about learning to confront racism, bias, and inequity, both personally and professionally. Join Missy on the journey to help create a more musical, thoughtful, joyful, and just world!",
		"itunes_id": 1544842397,
		"latest_pub_date_ms": 1634788739000,
		"earliest_pub_date_ms": 1607976187009,
		"language": "English",
		"country": "United States",
		"website": "https://musicedamplified.blubrry.net?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [111, 134, 67]
	}, {
		"id": "8dcc45a76d5a4009a57b69372016636c",
		"title": "The Music Business Worldwide Podcast",
		"publisher": "Music Business Worldwide",
		"image": "https://production.listennotes.com/podcasts/the-music-business-worldwide-podcast-music-89roG7CyiX_-uD8JWehMI9P.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/the-music-business-worldwide-podcast-music-89roG7CyiX_-uD8JWehMI9P.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/8dcc45a76d5a4009a57b69372016636c/",
		"total_episodes": 25,
		"explicit_content": true,
		"description": "Music Business Worldwide (MBW) is the leading information and jobs service for the global music industry. It publishes two podcasts: The weekly series, Talking Trends – which dives behind the headlines in the music industry – as well as The MBW Podcast, which sees us interview some of the leading figures in the global business.",
		"itunes_id": 1017420111,
		"latest_pub_date_ms": 1634756400000,
		"earliest_pub_date_ms": 1436241600018,
		"language": "English",
		"country": "United States",
		"website": "http://www.musicbizworldwide.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [67, 93, 95]
	}, {
		"id": "b37d86326a854362ae52f5c8a98b7d3f",
		"title": "The Band: A History",
		"publisher": "The Band: A History",
		"image": "https://production.listennotes.com/podcasts/the-band-a-history-the-band-a-history-15edhgBFpUR-qxZUCLNRFif.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/the-band-a-history-the-band-a-history-15edhgBFpUR-qxZUCLNRFif.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/b37d86326a854362ae52f5c8a98b7d3f/",
		"total_episodes": 28,
		"explicit_content": false,
		"description": "Exploring the history of Canadian-American roots rock group, The Band.",
		"itunes_id": 1452077561,
		"latest_pub_date_ms": 1633435200000,
		"earliest_pub_date_ms": 1549686960022,
		"language": "English",
		"country": "United States",
		"website": "http://www.dollarcountry.org?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67]
	}, {
		"id": "649c49566cb24dd48533119223224661",
		"title": "Dollar Country",
		"publisher": "WTFC Radio Lawrence Kansas",
		"image": "https://production.listennotes.com/podcasts/dollar-country-wtfc-radio-lawrence-kansas-OTU2shjErGm-vrX5d4VHy8B.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/dollar-country-wtfc-radio-lawrence-kansas-OTU2shjErGm-vrX5d4VHy8B.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/649c49566cb24dd48533119223224661/",
		"total_episodes": 153,
		"explicit_content": false,
		"description": "Dollar bin country radio.",
		"itunes_id": 1251796338,
		"latest_pub_date_ms": 1634743800000,
		"earliest_pub_date_ms": 1475510400099,
		"language": "English",
		"country": "United States",
		"website": "http://www.dollarcountry.org?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [67, 134]
	}, {
		"id": "9fb5ff58baed47078beee2d72ecd623e",
		"title": "We Made You A Song",
		"publisher": "Trent Wagler",
		"image": "https://production.listennotes.com/podcasts/we-made-you-a-song-HWKzmuj_7Vv-OYKRuGbyhx1.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/we-made-you-a-song-HWKzmuj_7Vv-OYKRuGbyhx1.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/9fb5ff58baed47078beee2d72ecd623e/",
		"total_episodes": 9,
		"explicit_content": false,
		"description": "We Made You A Song is a podcast about songs commissioned by fans and then created by the Steel Wheels during the 2020 Pandemic. Each episode explores the story behind the song, the people involved, and the songwriting process. This podcast is a creative collaboration between The Steel Wheels and WMRA.",
		"itunes_id": 1535635368,
		"latest_pub_date_ms": 1607446854000,
		"earliest_pub_date_ms": 1602519189008,
		"language": "English",
		"country": "United States",
		"website": "https://www.wmra.org/programs/we-made-you-song?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website#stream/0",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [134, 67, 210, 208]
	}, {
		"id": "452c285d3e884e7abeea9ad1591fd513",
		"title": "Little Steven's Underground Garage - Coolest Conversations",
		"publisher": "Coolest Conversations with the Mighty Manfred:",
		"image": "https://production.listennotes.com/podcasts/little-stevens-underground-garage-coolest-dnk_80rEIBP-S2OJiFWE1IV.300x300.jpg",
		"thumbnail": "https://production.listennotes.com/podcasts/little-stevens-underground-garage-coolest-dnk_80rEIBP-S2OJiFWE1IV.300x300.jpg",
		"listennotes_url": "https://www.listennotes.com/c/452c285d3e884e7abeea9ad1591fd513/",
		"total_episodes": 160,
		"explicit_content": false,
		"description": "Little Steven's Underground Garage - Coolest Conversations presented by Hard Rock Cafe are a series of interviews with The Mighty Manfred (frontman and driving force behind Garage Rock band The Woggles) and artists who have been chosen by Little Steven Van Zandt as the “Coolest Song In The World This Week” in Little Steven's Underground Garage. Past guests have included Tom Petty, Alice Cooper, Joan Jett, Carlos Santana, and many more.\n\nCoolest Conversations airs live every Friday at 2:00 PM ET on SiriusXM Ch. 21 and is posted online that Monday.\n\nEvery Wednesday a \"Coolest Conversation\" from the past is posted too.",
		"itunes_id": 1482152133,
		"latest_pub_date_ms": 1634587597000,
		"earliest_pub_date_ms": 1569989700159,
		"language": "English",
		"country": "United States",
		"website": "http://undergroundgarage.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
		"is_claimed": false,
		"type": "episodic",
		"episodes": [],
		"genre_ids": [67, 210, 134, 122, 101, 100, 244]
	}],
	"total": 582,
	"has_next": true,
	"has_previous": false,
	"page_number": 1,
	"previous_page_number": 0,
	"next_page_number": 2,
	"listennotes_url": "https://www.listennotes.com/best-music-podcasts-134/"
};

export const getBestPodcastsResponseData = (fakePodcasts?: LNPodcast[]): LNBestPodcastsResponse => ({
	...fakeLNPodcastsResponse,
	podcasts: fakePodcasts || fakeLNPodcastsResponse.podcasts.map(lnPodcast =>
		({ ...lnPodcast, id: randomString() })
	)
});

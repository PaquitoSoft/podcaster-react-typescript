import Podcast from '../../entities/podcast';
import { getPodcastDetail } from '../../apis/podcasts-api';
import { RouteViewProps } from '../_shared/router/router';
import Dictionary from '../../types/dictionary-type';
import PodcastLayout from '../_shared/layout/podcast-layout/podcast-layout';

import './episode-detail-view.css';


function EpisodeDetailView({ remoteData, request }: RouteViewProps) {
	const podcast = remoteData as Podcast;
	const episode = podcast?.episodes.find(episode => episode.id === request.pathParams?.episodeId);

	return (
		<PodcastLayout podcast={podcast} error={undefined}>
			<div className="episode-detail-page page-with-sidebar">
				<div className="content-section">
					<div className="episode-detail section">
						<div className="title">{episode?.title}</div>
						<div className="subtitle" dangerouslySetInnerHTML={{ __html: episode?.description || '' }}></div>
						<hr/>
						<div className="player">
							<audio src={episode?.audioUrl} controls></audio>
						</div>
					</div>
				</div>
			</div>
		</PodcastLayout>
	);
}

EpisodeDetailView.fetchData = ({ pathParams }: { pathParams: Dictionary<string>}) =>
	getPodcastDetail(pathParams.podcastId);


export default EpisodeDetailView;

import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Podcast from '../../entities/podcast';
import { getPodcastDetail } from '../../apis/podcasts-api';

import PodcastLayout from '../_shared/layout/podcast-layout/podcast-layout';
import useRemoteData from '../_shared/use-remote-data/use-remote-data';

import './episode-detail-view.css';

type ViewURLParams = {
	podcastId: string;
	episodeId: string;
}

function EpisodeDetailView() {
	const { podcastId, episodeId } = useParams<ViewURLParams>();
	const loader = useCallback(() => getPodcastDetail(podcastId), [podcastId]);

	const { data, error, isLoading } = useRemoteData(loader);
	const podcast = data as Podcast;
	const episode = podcast?.episodes.find(episode => episode.id === episodeId);

	return (
		<PodcastLayout podcast={podcast} isLoading={isLoading} error={error}>
			<div className="episode-detail-view page-with-sidebar">
				<div className="content-section">
					<div className="section">
						<div className="episode-detail-view__title">{episode?.title}</div>
						<div className="episode-detail-view__subtitle" dangerouslySetInnerHTML={{ __html: episode?.description || '' }}></div>
						<hr/>
						<div className="episode-detail-view__player">
							<audio src={episode?.audioUrl} controls></audio>
						</div>
					</div>
				</div>
			</div>
		</PodcastLayout>
	);
}

export default EpisodeDetailView;

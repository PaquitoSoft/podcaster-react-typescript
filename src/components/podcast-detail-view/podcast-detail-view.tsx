import { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPodcastDetail } from '../../apis/podcasts-api';
import Podcast from '../../entities/podcast';

import PodcastLayout from '../_shared/layout/podcast-layout/podcast-layout';
import TimeFormatter from '../_shared/time-formatter/time-formatter';
import useRemoteData from '../_shared/use-remote-data/use-remote-data';

import './podcast-detail-view.css';

type ViewURLParams = {
	podcastId: string;
}

function PodcastDetailView() {
	const { podcastId } = useParams<ViewURLParams>();
	const loader = useCallback(() => getPodcastDetail(podcastId), [podcastId]);

	const { data, error, isLoading } = useRemoteData(loader);
	const podcast = data as Podcast;

	return (
		<PodcastLayout podcast={podcast} isLoading={isLoading} error={error}>
			 <div className="podcast-detail-page page-with-sidebar">
				<section className="content-section">
					<div className="section podcast-episodes-count">
						<span>
							Episodes: {podcast?.episodes.length}
						</span>
					</div>
					<div className="section podcast-episodes">
						<table className="table table-hover table-striped">
							<thead>
								<tr>
									<th>Title</th>
									<th>Date</th>
									<th>Duration</th>
								</tr>
							</thead>
							<tbody>
								{podcast?.episodes.map(episode => 
									<tr className="podcast-episode-summary" key={episode.id}>
										<td>
											<Link
												to={`/podcast/${podcast?.id}/episode/${episode.id}`}
											>{episode.title}</Link>
										</td>
										<td>{episode.publishedDate}</td>
										<td className="duration">
											<TimeFormatter seconds={episode.audioLength} />
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</PodcastLayout>
	);
}

export default PodcastDetailView;

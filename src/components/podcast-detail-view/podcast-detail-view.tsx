import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetail } from '../../apis/podcasts-api';
import Podcast from '../../entities/podcast';

import Link, { LinkDecoration } from '../_shared/link/link';
import PodcastLayout from '../_shared/layout/podcast-layout/podcast-layout';
import Translation from '../_shared/translation/translation';
import TimeFormatter from '../_shared/time-formatter/time-formatter';
import useRemoteData from '../_shared/use-remote-data/use-remote-data';

import './podcast-detail-view.css';

type ViewURLParams = {
	podcastId: string;
}

function PodcastDetailView() {
	const { podcastId } = useParams<ViewURLParams>();
	const loader = useCallback(() => getPodcastDetail(podcastId), [podcastId]);

	const { data } = useRemoteData(loader);
	const podcast = data as Podcast;

	return (
		<PodcastLayout podcast={podcast}>
			 <div className="podcast-detail-view page-with-sidebar">
				<section className="content-section">
					<div className="section podcast-detail-view__episodes-count">
						<span>
							<Translation
								name="podcast-detail-view.episodes-count"
								params={{ count: podcast?.episodes.length }}
							/>
						</span>
					</div>
					<div className="section">
						<table className="podcast-detail-view__table">
							<thead>
								<tr>
									<th><Translation name="podcast-detail-view.episodes-table-title" /></th>
									<th><Translation name="podcast-detail-view.episodes-table-date" /></th>
									<th><Translation name="podcast-detail-view.episodes-table-duration" /></th>
								</tr>
							</thead>
							<tbody>
								{podcast?.episodes.map(episode => 
									<tr className="podcast-detail-view__row" key={episode.id}>
										<td>
											<Link
												to={`/podcast/${podcast?.id}/episode/${episode.id}`}
												decoration={LinkDecoration.UNDERLINE}
											>{episode.title}</Link>
										</td>
										<td>{episode.publishedDate.toDateString()}</td>
										<td className="podcast-detail-view__episode-duration">
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

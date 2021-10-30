import { getPodcastDetail } from '../../apis/podcasts-api';
import Podcast from '../../entities/podcast';
import Dictionary from '../../types/dictionary-type';
import Link from '../_shared/link/link';
import { RouteViewProps } from '../_shared/router/router';
import PodcastLayout from '../_shared/layout/podcast-layout/podcast-layout';
import TimeFormatter from '../_shared/time-formatter/time-formatter';

import './podcast-detail-view.css';

function PodcastDetailView({ remoteData }: RouteViewProps) {
	const podcast = remoteData as Podcast;

	return (
		<PodcastLayout podcast={podcast} error={undefined}>
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

PodcastDetailView.fetchData = ({ pathParams }: { pathParams: Dictionary<string>}) =>
	getPodcastDetail(pathParams.podcastId);

export default PodcastDetailView;

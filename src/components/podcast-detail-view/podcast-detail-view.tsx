import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetail } from '../../apis/podcasts-api';
import Podcast from '../../entities/podcast';

import PodcastLayout from '../_shared/layout/podcast-layout/podcast-layout';

import './podcast-detail-view.css';

type ViewURLParams = {
	podcastId: string;
}

function PodcastDetailView() {
	const [podcast, setPodcast] = useState<Podcast>();
	const { podcastId } = useParams<ViewURLParams>();

	useEffect(() => {
		const fetchData = async () => {
			const podcast = await getPodcastDetail(podcastId);
			setPodcast(podcast);
		}

		fetchData();
	});

	return (
		<PodcastLayout podcast={podcast}>
			<div>
				<h1>Podcast detail view</h1>
			</div>
		</PodcastLayout>
	);
}

export default PodcastDetailView;

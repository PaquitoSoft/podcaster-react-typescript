import { screen } from "@testing-library/react";

import { renderWithRouter } from '../../../support/custom-render';
import { mockPodcastDetailRequest } from '../../../support/mock-server';
import { getPodcastDetailResponseData } from '../../__fixtures__/ln-fixtures';

import EpisodeDetailView from '../episode-detail-view';

const mockFakeResponse = getPodcastDetailResponseData();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
	useParams: () => ({
		podcastId: mockFakeResponse.id,
		episodeId: mockFakeResponse.episodes[0].id
	}),
}));

describe('EpisodeDetailView', () => {
	it('Should render sidebar and episode content', async () => {
		mockPodcastDetailRequest();
		const { container } = renderWithRouter(<EpisodeDetailView />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		// No podacst nor episode content while fetching remote data
		expect(screen.queryByText(mockFakeResponse.title)).toBeNull();
		expect(screen.queryByText(mockFakeResponse.episodes[0].title)).toBeNull();

		const podcastTitle = await screen.findByText(mockFakeResponse.title);
		const episodeTitle = await screen.findByText(mockFakeResponse.episodes[0].title);
		const episodeAudio = container.querySelector('audio');

		expect(podcastTitle).toBeInTheDocument();
		expect(episodeTitle).toBeInTheDocument();
		expect(episodeAudio).toHaveAttribute('src', mockFakeResponse.episodes[0].audio);
	});
});

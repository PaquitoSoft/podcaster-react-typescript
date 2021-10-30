import { render, screen } from "@testing-library/react";

import { getFakePodcast } from "../../__fixtures__/podcasts-fixtures";

import EpisodeDetailView from '../episode-detail-view';

describe('EpisodeDetailView', () => {
	it('Should render sidebar and episode content', () => {
		const mockPodcast = getFakePodcast();
		const mockRequest = {
			url: `/podcast/${mockPodcast.id}/episode/${mockPodcast.episodes[0].id}`,
			searchParams: {},
			pathParams: {
				podcastId: mockPodcast.id,
				episodeId: mockPodcast.episodes[0].id
			}
		};
		const { container } = render(<EpisodeDetailView remoteData={mockPodcast} request={mockRequest} />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByText(mockPodcast.title)).toBeInTheDocument();
		expect(screen.getByText(mockPodcast.episodes[0].title)).toBeInTheDocument();
		expect(container.querySelector('audio')).toHaveAttribute('src', mockPodcast.episodes[0].audioUrl);
	});
});

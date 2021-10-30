import { render, screen } from "@testing-library/react";

import { getFakePodcast } from "../../__fixtures__/podcasts-fixtures";

import PodcastDetailView from '../podcast-detail-view';

describe('PodcastDetailView', () => {
	it('Should render podcast info and its episodes list', async() => {
		const mockPodcast = getFakePodcast();
		const mockRequest = {
			url: `/podcast/${mockPodcast.id}/episode/${mockPodcast.episodes[0].id}`,
			searchParams: {},
			pathParams: {
				podcastId: mockPodcast.id
			}
		};
		const {container } = render(<PodcastDetailView remoteData={mockPodcast} request={mockRequest} />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByText(mockPodcast.title)).toBeInTheDocument();
		expect(screen.getByText(mockPodcast.author)).toBeInTheDocument();
		expect(screen.getByText(`Episodes: ${mockPodcast.episodes.length}`)).toBeInTheDocument();
		expect(container.querySelectorAll('tbody tr')).toHaveLength(mockPodcast.episodes.length);
	});
});

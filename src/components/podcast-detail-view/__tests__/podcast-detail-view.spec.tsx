import { screen } from "@testing-library/react";
import { renderWithApplicationProviders } from "../../../support/custom-render";
import { mockPodcastDetailRequest } from "../../../support/mock-server";
import { getPodcastDetailResponseData } from "../../__fixtures__/ln-fixtures";

import PodcastDetailView from '../podcast-detail-view';

const mockFakeResponse = getPodcastDetailResponseData();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
	useParams: () => ({
		podcastId: mockFakeResponse.id
	}),
}));


describe('PodcastDetailView', () => {
	it('Should render podcast info and its episodes list', async() => {
		mockPodcastDetailRequest();
		const { container } = renderWithApplicationProviders(<PodcastDetailView />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		// No podcast nor episode content while fetching remote data
		expect(screen.queryByText(mockFakeResponse.title)).toBeNull();
		expect(screen.queryByText('Episodes')).toBeNull();

		const podcastTitle = await screen.findByText(mockFakeResponse.title);
		const podcastAuthor = await screen.findByText(mockFakeResponse.publisher);
		const episodesCount = await screen.findByText(`Episodes: ${mockFakeResponse.episodes.length}`);
		const episodesRows = container.querySelectorAll('tbody tr');

		expect(podcastTitle).toBeInTheDocument();
		expect(podcastAuthor).toBeInTheDocument();
		expect(episodesCount).toBeInTheDocument();
		expect(episodesRows).toHaveLength(mockFakeResponse.episodes.length);
	});
});

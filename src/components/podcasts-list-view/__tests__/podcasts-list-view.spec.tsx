import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { renderWithApplicationProviders } from "../../../support/custom-render";
import { mockBestPodcastsRequest } from "../../../support/mock-server";

import PodcastsListView from "../podcasts-list-view";

describe('PodcastsListView', () => {

	const PODCAST_CARD_TEST_ID = 'podcast-card';

	it('Should render async loaded list', async () => {
		mockBestPodcastsRequest();
		renderWithApplicationProviders(<PodcastsListView />);

		// No list while fetching remote data
		expect(screen.getByPlaceholderText('Filter podcasts...')).toBeInTheDocument();
		expect(screen.queryByTestId(PODCAST_CARD_TEST_ID)).not.toBeInTheDocument();

		const podcasts = await screen.findAllByTestId(PODCAST_CARD_TEST_ID);
		expect(podcasts).toHaveLength(100);
	});

	it('Should render filtered list', async () => {
		mockBestPodcastsRequest();
		renderWithApplicationProviders(<PodcastsListView />);

		let podcasts = screen.queryAllByTestId(PODCAST_CARD_TEST_ID);
		expect(podcasts).toHaveLength(0);

		podcasts = await screen.findAllByTestId(PODCAST_CARD_TEST_ID);
		expect(podcasts).toHaveLength(100);
		
		await userEvent.type(screen.getByRole('textbox'), 'drum');
		podcasts = await screen.findAllByTestId(PODCAST_CARD_TEST_ID);
		expect(podcasts).toHaveLength(5);
	});
});

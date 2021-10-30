import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { getFakePodcastsList } from "../../__fixtures__/podcasts-fixtures";

import PodcastsListView from "../podcasts-list-view";

describe('PodcastsListView', () => {

	const PODCAST_CARD_TEST_ID = 'podcast-card';

	it('Should render async loaded list', async () => {
		const fakePodcastsList = getFakePodcastsList();
		render(<PodcastsListView remoteData={fakePodcastsList} />);

		const podcasts = screen.getAllByTestId(PODCAST_CARD_TEST_ID);
		expect(podcasts).toHaveLength(20);
	});

	it('Should render filtered list', async () => {
		const fakePodcastsList = getFakePodcastsList();
		render(<PodcastsListView remoteData={fakePodcastsList} />);

		let podcasts = screen.queryAllByTestId(PODCAST_CARD_TEST_ID);
		expect(podcasts).toHaveLength(20);

		await userEvent.type(screen.getByRole('textbox'), 'ra');
		podcasts = await screen.findAllByTestId(PODCAST_CARD_TEST_ID);
		expect(podcasts).toHaveLength(4);
	});
});

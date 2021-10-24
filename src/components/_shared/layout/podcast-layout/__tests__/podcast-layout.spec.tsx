import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../../support/custom-render';
import { getFakePodcast } from '../../../../__fixtures__/podcasts-fixtures';

import PodcastLayout from '../podcast-layout';

describe('PodcastLayout', () => {
	it('Should render loader if no podcast is provided', () => {
		const content = 'Podcast details';
		renderWithRouter(<PodcastLayout><span>{content}</span></PodcastLayout>);

		expect(screen.queryByText(content)).toBeNull();
	});

	it('Should render children when podcast is provided', () => {
		const content = 'Podcast details';
		const fakePodcast = getFakePodcast();

		renderWithRouter(<PodcastLayout podcast={fakePodcast}><span>{content}</span></PodcastLayout>);

		expect(screen.queryByText(content)).toBeInTheDocument();
	});
});

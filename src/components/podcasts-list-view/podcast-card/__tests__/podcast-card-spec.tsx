import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../support/custom-render';
import { getFakePodcast } from '../../../__fixtures__/podcasts-fixtures';

import PodcastCard from '../podcast-card';

describe('PodcastCard', () => {
	it('Should render podcast card', () => {
		const fakePodcast = getFakePodcast();
		renderWithRouter(<PodcastCard podcast={fakePodcast} />);

		expect(screen.getByRole('link')).toHaveAttribute('href', `/podcast/${fakePodcast.id}`);
		const image = screen.getByAltText(fakePodcast.title);
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', fakePodcast.imageUrl);
		expect(screen.getByText(fakePodcast.title)).toBeInTheDocument();
		expect(screen.getByText(fakePodcast.author)).toBeInTheDocument();
	})
});
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../../../support/custom-render';
import { getFakePodcast } from '../../../../../__fixtures__/podcasts-fixtures';

import PodcastSidebarInfo from '../podcast-sidebar-info';

describe('PodcastSidebarInfo', () => {
	it('Should render podcast info', () => {
		const fakePodcast = getFakePodcast();
		renderWithRouter(<PodcastSidebarInfo podcast={fakePodcast} />);

		const image = screen.getByAltText(fakePodcast.title);
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', fakePodcast.imageUrl);
		expect(screen.getByText(fakePodcast.title)).toBeInTheDocument();
		expect(screen.getByText(fakePodcast.author)).toBeInTheDocument();
		expect(screen.getByText(fakePodcast.description)).toBeInTheDocument();
	});

	it('Should render with custom class', () => {
		const fakePodcast = getFakePodcast();
		const customClass = 'bar';
		renderWithRouter(<PodcastSidebarInfo podcast={fakePodcast} className={customClass} />);

		expect(screen.getByRole('complementary')).toHaveClass(customClass);
	});
});

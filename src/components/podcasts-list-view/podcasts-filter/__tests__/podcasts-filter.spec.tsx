import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithApplicationProviders } from '../../../../support/custom-render';

import PodcastsFilter from '../podcasts-filter';

describe('PodcastFilter', () => {
	it('Should render filter text input and filter podcasts count', () => {
		const fakeCount = 12;
		renderWithApplicationProviders(<PodcastsFilter filteredPodcastsCount={fakeCount} onFilter={jest.fn()} />);

		expect(screen.getByPlaceholderText('Filter podcasts...')).toBeInTheDocument();
		expect(screen.getByTestId('podcast-filter-count')).toHaveTextContent(fakeCount.toString());
	});

	it('Should call "onFilter" when user types something in the text input', async () => {
		const onFilter = jest.fn();
		const fakeFilterText = 'Foo';
		renderWithApplicationProviders(<PodcastsFilter filteredPodcastsCount={10} onFilter={onFilter} />);

		await userEvent.type(screen.getByRole('textbox'), fakeFilterText);

		expect(screen.getByDisplayValue(fakeFilterText)).toBeInTheDocument();
		expect(onFilter).toHaveBeenNthCalledWith(fakeFilterText.length, fakeFilterText);
	});
});

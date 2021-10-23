import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../../../test/custom-render';

import Header from '../header';

describe('Header', () => {
	it('Should render component with no loader', () => {
		renderWithRouter(<Header showLoader={false} />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).toHaveClass('hidden');
	});

	it('Should render component with loader', () => {
		renderWithRouter(<Header showLoader={true} />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).not.toHaveClass('hidden');
	});
});

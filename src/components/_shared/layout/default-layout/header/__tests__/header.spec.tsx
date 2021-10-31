import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../../../support/custom-render';

import Header from '../header';

describe('Header', () => {
	it('Should render component with no loader', () => {
		renderWithRouter(<Header showLoader={false} />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).toHaveClass('header__spinner--off');
	});

	it('Should render component with loader', () => {
		renderWithRouter(<Header showLoader={true} />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).toHaveClass('header__spinner--on');
	});
});

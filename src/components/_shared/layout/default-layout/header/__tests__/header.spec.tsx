import { screen } from '@testing-library/react';
import { renderWithApplicationProviders } from '../../../../../../support/custom-render';
import { mockUseLoader } from '../../../../../../support/mock-providers';

import Header from '../header';

describe('Header', () => {
	it('Should render component with no loader', () => {
		mockUseLoader(false);
		renderWithApplicationProviders(<Header />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).toHaveClass('header__spinner--off');
	});

	it('Should render component with loader', () => {
		mockUseLoader(true);
		renderWithApplicationProviders(<Header />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).toHaveClass('header__spinner--on');
	});
});

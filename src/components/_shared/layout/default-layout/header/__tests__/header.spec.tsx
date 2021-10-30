import { render, screen } from '@testing-library/react';
import * as LoaderProvider from '../../../../loader-provider/loader-provider';

import Header from '../header';

const mockUseLoader = values => {
	jest.spyOn(LoaderProvider, 'useLoader').mockImplementation(() => values);
};

describe('Header', () => {
	it('Should render component with no loader', () => {
		mockUseLoader({ isLoading: false });
		render(<Header />);
		
		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).toHaveClass('hidden');
	});

	it('Should render component with loader', () => {
		mockUseLoader({ isLoading: true });
		render(<Header />);

		expect(screen.getByText('Podcaster')).toBeInTheDocument();
		expect(screen.getByTestId('loader-indicator')).not.toHaveClass('hidden');
	});
});

import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../../test/custom-render';

import DefaultLayout from '../default-layout';

// This is how we could mock inner components to mimic shallow rendering
// jest.mock('../header/header', () => (props: any) => <span data-name="Header" {...props} />);
// jest.mock('../error-message/error-message', () => (props: any) => <span data-name="ErrorMessage" {...props} />);

describe('DefaultLayout', () => {
	it('Should render header and main content', () => {
		const mainText = 'Foo Bar';
		renderWithRouter(<DefaultLayout><span>{mainText}</span></DefaultLayout>);

		// Header title
		expect(screen.getByText('Podcaster')).toBeInTheDocument();

		expect(screen.getByText(mainText)).toBeInTheDocument();
	});

	it('Should add provided className to main content', () => {
		const customClass = 'foo';
		renderWithRouter(<DefaultLayout className={customClass}><span>Bar</span></DefaultLayout>);

		expect(screen.getByRole('main')).toHaveClass(customClass);
	});

	it('Should display an error if provided', () => {
		const errorMessage = 'Ouch!';
		renderWithRouter(<DefaultLayout error={new Error(errorMessage)}><span>Foo</span></DefaultLayout>);
		
		expect(screen.getByText(errorMessage)).toBeInTheDocument();
	});
});

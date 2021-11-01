import { screen } from '@testing-library/react';
import { renderWithApplicationProviders } from '../../../../../support/custom-render';
import { mockUseGenericError } from '../../../../../support/mock-providers';

import DefaultLayout from '../default-layout';

// This is how we could mock inner components to mimic shallow rendering
// jest.mock('../header/header', () => (props: any) => <span data-name="Header" {...props} />);
// jest.mock('../error-message/error-message', () => (props: any) => <span data-name="ErrorMessage" {...props} />);

describe('DefaultLayout', () => {
	it('Should render header and main content', () => {
		const mainText = 'Foo Bar';
		renderWithApplicationProviders(<DefaultLayout><span>{mainText}</span></DefaultLayout>);

		// Header title
		expect(screen.getByText('Podcaster')).toBeInTheDocument();

		expect(screen.getByText(mainText)).toBeInTheDocument();
	});

	it('Should add provided className to main content', () => {
		const customClass = 'foo';
		renderWithApplicationProviders(<DefaultLayout className={customClass}><span>Bar</span></DefaultLayout>);

		expect(screen.getByRole('main')).toHaveClass(customClass);
	});

	it('Should display an error if there is a generic one in the context', () => {
		const errorMessage = 'Ouch!';
		mockUseGenericError(new Error(errorMessage))
		renderWithApplicationProviders(<DefaultLayout><span>Foo</span></DefaultLayout>);
		
		expect(screen.getByText(errorMessage)).toBeInTheDocument();
	});
});

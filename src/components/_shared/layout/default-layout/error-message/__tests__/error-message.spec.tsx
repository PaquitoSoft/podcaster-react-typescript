import { render, screen } from '@testing-library/react';

import ErrorMessage from '../error-message';

describe('ErrorMessage', () => {
	it('Should render the error message', () => {
		const message = 'Ouch! Something wrong happened!';
		render(<ErrorMessage error={new Error(message)} />);

		expect(screen.getByText(message)).toBeInTheDocument();
	});
});

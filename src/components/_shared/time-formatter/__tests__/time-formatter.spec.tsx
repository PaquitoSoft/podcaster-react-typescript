import { render, screen } from '@testing-library/react';

import TimeFormatter from '../time-formatter';

describe('Time Formatter', () => {
	it('Should render time less than one hour with four digits', () => {
		render(<TimeFormatter seconds={125} />);
		const timeElement = screen.getByText('02:05');
		expect(timeElement).toBeInTheDocument();
	});

	it('Should render time over one hour with six digits', async () => {
		render(<TimeFormatter seconds={4040} />);
		const timeElement = screen.getByText('01:07:20');
		expect(timeElement).toBeInTheDocument();
	});
});

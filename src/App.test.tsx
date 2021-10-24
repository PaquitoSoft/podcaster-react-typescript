import { render, screen } from '@testing-library/react';

import { mockBestPodcastsRequest } from './support/mock-server';

import App from './App';

test('renders learn react link', () => {
	mockBestPodcastsRequest();

	render(<App />);
	const linkElement = screen.getByText(/Podcaster/i);
	expect(linkElement).toBeInTheDocument();
});

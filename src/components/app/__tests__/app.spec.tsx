import { render, screen } from '@testing-library/react';

import { mockBestPodcastsRequest } from '../../../support/mock-server';

import App from '../app';


describe('App', () => {
	it('Should render default view', () => {
		mockBestPodcastsRequest();
	
		render(<App initialLocale="en" initialTranslations={{ 'main.title': 'Podcaster' }} />);
		const linkElement = screen.getByText(/Podcaster/i);
		expect(linkElement).toBeInTheDocument();
	});
});

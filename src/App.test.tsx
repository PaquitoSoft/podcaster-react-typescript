import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { mockRequest } from './test/mock-server';

test('renders learn react link', () => {
	mockRequest({
		url: 'https://listen-api.listennotes.com/api/v2/best_podcasts',
		responseData: {}
	});

	render(<App />);
	const linkElement = screen.getByText(/Podcaster/i);
	expect(linkElement).toBeInTheDocument();
});

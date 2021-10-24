import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

export function renderWithProvider(Component: JSX.Element, Provider: React.ComponentType) {
	return render(Component, { wrapper: Provider });
}

export function renderWithRouter(Component: JSX.Element) {
	return renderWithProvider(Component, BrowserRouter);
}

import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import ApplicationProviders from '../components/app/application-providers/application-providers';
import { LOCALE } from '../components/app/application-providers/i18n-provider/i18n-provider';
import englishTranslations from '../resources/i18n/texts_en';

const initialLocale = LOCALE.ES;
const initialTranslations = englishTranslations;

function ApplicationWrapper({ children }: { children: JSX.Element }) {
	return (
		<ApplicationProviders
			initialLocale={initialLocale}
			initialTranslations={initialTranslations}
		>
			<BrowserRouter>{children}</BrowserRouter>
		</ApplicationProviders>
	);
}

export function renderWithProvider(Component: JSX.Element, Provider: React.ComponentType) {
	return render(Component, { wrapper: Provider });
}

export function renderWithApplicationProviders(Component: JSX.Element) {
	return renderWithProvider(Component, ApplicationWrapper as React.FC);
}

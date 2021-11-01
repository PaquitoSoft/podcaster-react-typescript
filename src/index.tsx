import React from 'react';
import ReactDOM from 'react-dom';
import { getTranslationsByLocale } from './apis/translations-api';
import App from './components/app/app';

import reportWebVitals from './reportWebVitals';

async function initialize() {

	try {
		const locale = navigator.language.substring(0, 2);
		const translations = await getTranslationsByLocale(locale);

		ReactDOM.render(
			<React.StrictMode>
				<App initialLocale={locale} initialTranslations={translations} />
			</React.StrictMode>,
			document.getElementById('root')
		);
		
		// If you want to start measuring performance in your app, pass a function
		// to log results (for example: reportWebVitals(console.log))
		// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
		reportWebVitals();
	} catch (error) {
		console.error('Could not initialize application because of the translations bootstrap.', error);
	}
}
	
initialize();

import { useCallback } from "react";
import { useI18n, useTheme } from "../../../../app/application-providers/application-providers";
import { LOCALE } from "../../../../app/application-providers/i18n-provider/i18n-provider";
import { ThemeName } from "../../../../app/application-providers/theme-provider/theme-provider";

import Translation from "../../../translation/translation";

import './footer.css';

function Footer() {
	const { locale, changeLocale, getText } = useI18n();
	const { themeName, changeTheme } = useTheme();
	console.log({ currentLocale: locale, currentTheme: themeName });

	const updateLocale = useCallback((event: React.ChangeEvent<{ value: string }>) => {
		changeLocale(event.target.value as LOCALE);
	}, [changeLocale]);

	const updateTheme = useCallback((event: React.ChangeEvent<{ value: string }>) => {
		console.log(event);
		changeTheme(event.target.value as ThemeName);
	}, [changeTheme]);

	return (
		<footer className="app-footer">
			<section>
				<label htmlFor="language-selector"><Translation name="main.language-selector" /></label>
				<select
					name="language-selector"
					id="language-selector"
					onChange={updateLocale}
					defaultValue={locale}
				>
					<option value="en">{getText('main.language.en')}</option>
					<option value="es">{getText('main.language.es')}</option>
				</select>
			</section>
			<section>
				<label htmlFor="theme-selector"><Translation name="main.theme-selector" /></label>
				<select
					name="theme-selector"
					id="theme-selector"
					onChange={updateTheme}
					defaultValue={themeName}
				>
					<option value="light">{getText('main.theme.light')}</option>
					<option value="dark">{getText('main.theme.dark')}</option>
				</select>
			</section>
		</footer>
	);
}

export default Footer;

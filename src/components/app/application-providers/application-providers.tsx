import { ThemeProvider, useTheme } from "./theme-provider/theme-provider";
import { GenericErrorProvider, useGenericError } from "./generic-error-provider/generic-error-provider";
import { LoaderProvider, useLoader } from "./loader-provider/loader-provider";
import { I18NProvider, useI18n, LOCALE } from "./i18n-provider/i18n-provider";
import Dictionary from "../../../types/dictionary-type";

type Props = {
	initialLocale: LOCALE;
	initialTranslations: Dictionary<string>;
	children: JSX.Element | JSX.Element[];
};

const ApplicationProviders = ({ initialLocale, initialTranslations, children }: Props) => {
	return (
		<ThemeProvider>
			<I18NProvider initialLocale={initialLocale} initialTranslations={initialTranslations}>
				<LoaderProvider>
					<GenericErrorProvider>
						{children}				
					</GenericErrorProvider>
				</LoaderProvider>
			</I18NProvider>
		</ThemeProvider>
	)
}

export default ApplicationProviders;

export {
	useTheme,
	useI18n,
	useLoader,
	useGenericError
};

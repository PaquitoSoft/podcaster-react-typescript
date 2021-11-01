import { createContext, useCallback, useContext, useState } from "react";
import { getTranslationsByLocale } from "../../../../apis/translations-api";
import Dictionary from "../../../../types/dictionary-type";

type ContextType = {
	getText: (key: string, options?: { params: any }) => string;
	changeLocale: (newLocale: string) => Promise<void>;
}

const I18NContext = createContext<ContextType>({
	getText: () => '__',
	changeLocale: () => Promise.resolve()
});

I18NContext.displayName = 'I18NContext';

type ProviderProps = {
	initialLocale: string;
	initialTranslations: Dictionary<string>;
	children: JSX.Element;
};

const resolveTranslation = (
	{ translationName, translationParams, translations }:
	{ translationName: string, translationParams?: any, translations: Dictionary<string> }
) => {
	let text = translations[translationName];

	if (!text) return '__';
	
	if (translationParams) {
		Object.entries(translationParams).forEach(([key, value]) => {
			text = text.replaceAll(`{${key}}`, '' + value);
		});
	}

	return text;
};

export const I18NProvider = ({ initialLocale, initialTranslations, children }: ProviderProps) => {
	const [i18nData, setI18nData] = useState({ locale: initialLocale, translations: initialTranslations });

	const changeLocale = useCallback(async (newLocale: string) => {
		try {
			const translations = await getTranslationsByLocale(newLocale);
			setI18nData({ locale: newLocale, translations });
		} catch (error) {
			console.error(`Could not load translations for locale "${newLocale}"`, error);
		}
	}, []);

	const getText = useCallback((key, options = { params: {} }) => {
		return resolveTranslation({
			translationName: key,
			translationParams: options.params,
			translations: i18nData.translations
		});
	}, [i18nData.translations]);

	return (
		<I18NContext.Provider value={{ getText, changeLocale }}>
			{children}
		</I18NContext.Provider>
	);
};

export const useI18n = (): ContextType => {
	const context = useContext(I18NContext);

	if (!context) {
		throw new Error('useI18n must be used within a I18NContext');
	}

	return context;
};

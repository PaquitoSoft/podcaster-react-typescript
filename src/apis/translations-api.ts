import Dictionary from "../types/dictionary-type";

export const getTranslationsByLocale = async (locale: string): Promise<Dictionary<string>> => {
	const translations = await import(`../resources/i18n/texts_${locale}`);
	return translations.default;
}

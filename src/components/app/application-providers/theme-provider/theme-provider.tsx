import { createContext, useContext, useState } from 'react';

import './theme-provider.css';

export enum ThemeName {
	BASE = 'base'
};

type ProviderProps = {
	children: JSX.Element | JSX.Element[];
};

const ThemeContext = createContext({
	themeName: ThemeName.BASE,
	updateTheme: (themeName: ThemeName) => { return }
});
ThemeContext.displayName = 'ThemeContext';

export const ThemeProvider = ({ children }: ProviderProps) => {
	const [themeName, setThemeName] = useState<ThemeName>(ThemeName.BASE);
	return (
		<ThemeContext.Provider value={{
			themeName: themeName,
			updateTheme: setThemeName
		}}>
			<div className={`theme theme--${themeName}`}>{children}</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeContext');
	}

	return context;
};

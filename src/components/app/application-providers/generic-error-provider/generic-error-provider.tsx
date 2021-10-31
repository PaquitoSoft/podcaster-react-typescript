import { createContext, useCallback, useContext, useState } from "react";

type ProviderProps = {
	children: JSX.Element | JSX.Element[];
};

type ContextType = {
	error?: Error;
	setError: (error: Error) => void;
	resetError: () => void;
}

const GenericErrrorContext = createContext<ContextType>({
	error: undefined,
	setError: (error: Error) => { return },
	resetError: () => { return }
});
GenericErrrorContext.displayName = 'ThemeContext';

export const GenericErrorProvider = ({ children }: ProviderProps) => {
	const [error, setError] = useState<Error>();
	const resetError = useCallback(() => setError(undefined), []);
	return (
		<GenericErrrorContext.Provider
			value={{ error, setError, resetError }}
		>
			{children}
		</GenericErrrorContext.Provider>
	)
}

export const useGenericError = (): ContextType => {
	const context = useContext(GenericErrrorContext);

	if (!context) {
		throw new Error('useGenericError must be used within a GenericErrorContext');
	}

	return context;
};

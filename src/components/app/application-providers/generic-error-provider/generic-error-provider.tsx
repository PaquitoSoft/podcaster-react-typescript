import { createContext, useContext, useState } from "react";

type ProviderProps = {
	children: JSX.Element | JSX.Element[];
};

type ContextType = {
	error?: Error;
	updateError: (error: Error) => void;
}

const GenericErrrorContext = createContext<ContextType>({
	error: undefined,
	updateError: (error: Error) => { return }
});
GenericErrrorContext.displayName = 'ThemeContext';

export const GenericErrorProvider = ({ children }: ProviderProps) => {
	const [error, setError] = useState<Error>();
	return (
		<GenericErrrorContext.Provider
			value={{ error, updateError: setError }}
		>
			{children}
		</GenericErrrorContext.Provider>
	)
}

export const useGenericError = () => {
	const context = useContext(GenericErrrorContext);

	if (!context) {
		throw new Error('useGenericError must be used within a GenericErrorContext');
	}

	return context;
};

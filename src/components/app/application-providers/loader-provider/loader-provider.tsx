import { createContext, useCallback, useContext, useState } from "react";

type ContextType = {
	isLoading: boolean;
	startLoader: () => void;
	stopLoader: () => void;
}

const LoaderContext = createContext<ContextType>({
	isLoading: false,
	startLoader: () => { return },
	stopLoader: () => { return }
});

LoaderContext.displayName = 'LoaderContext';

type ProviderProps = {
	children: JSX.Element,
};

export const LoaderProvider = ({ children }: ProviderProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const startLoader = useCallback(() => setIsLoading(true), []);
	const stopLoader = useCallback(() => setIsLoading(false), []);

	return (
		<LoaderContext.Provider 
			value={{
				isLoading,
				startLoader,
				stopLoader
			}}
		>{children}</LoaderContext.Provider>
	)
};

export const useLoader = (): ContextType => {
	const context = useContext(LoaderContext);

	if (!context) {
		throw new Error('useLoader must be used within a LoaderContext');
	}

	return context;
};

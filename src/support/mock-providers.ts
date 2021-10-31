import * as GenericErrorProvider from "../components/app/application-providers/generic-error-provider/generic-error-provider";
import * as LoaderProvider from "../components/app/application-providers/loader-provider/loader-provider";

export const mockUseLoader = (isLoading = false) => {
	const startLoaderMock = jest.fn();
	const stopLoaderMock = jest.fn();

	jest.spyOn(LoaderProvider, 'useLoader').mockImplementation(() => ({
		isLoading,
		startLoader: startLoaderMock,
		stopLoader: stopLoaderMock
	}));

	return { startLoaderMock, stopLoaderMock };
};

export const mockUseGenericError = (error?: Error) => {
	const setErrorMock = jest.fn();
	const resetErrorMock = jest.fn();

	jest.spyOn(GenericErrorProvider, 'useGenericError').mockImplementation(() => ({
		error,
		setError: setErrorMock,
		resetError: resetErrorMock
	}));

	return { setErrorMock, resetErrorMock };
};

import { renderHook } from '@testing-library/react-hooks';
import { mockUseGenericError, mockUseLoader } from '../../../../support/mock-providers';
import PodcasterError from '../../../../types/error-type';

import useRemoteData from '../use-remote-data';

describe('useRemoteData', () => {

	it('Should fetch data when fetching is succesfull', async () => {
		const { startLoaderMock, stopLoaderMock } =  mockUseLoader();
		const remoteData = { foo: 'bar' };
		const loader = () => new Promise(resolve => setTimeout(() => resolve(remoteData), 10));
		const { result, waitForNextUpdate } = renderHook(() => useRemoteData(loader));

		expect(result.current.data).toBe(undefined);
		expect(startLoaderMock).toHaveBeenCalled();
		expect(stopLoaderMock).not.toHaveBeenCalled();

		await waitForNextUpdate();

		expect(result.current.data).toBe(remoteData)
		expect(stopLoaderMock).toHaveBeenCalled();
	});

	it('Should raise an error when fetching data fails', async () => {
		const { startLoaderMock, stopLoaderMock } =  mockUseLoader();
		const { setErrorMock } = mockUseGenericError();
		const error = new Error('Ouch!') as PodcasterError;
		error.statusCode = 412;
	
		const loader = () => new Promise((_, reject) => setTimeout(() => reject(error), 10));
		const { result, waitForValueToChange } = renderHook(() => useRemoteData(loader));

		expect(result.current.data).toBe(undefined);
		expect(startLoaderMock).toHaveBeenCalled();
		expect(stopLoaderMock).not.toHaveBeenCalled();

		await waitForValueToChange(() => setErrorMock.mock.calls.length);

		expect(result.current.data).toBe(undefined)
		expect(setErrorMock).toHaveBeenCalledWith(error);
		expect(stopLoaderMock).toHaveBeenCalled();
	});
});


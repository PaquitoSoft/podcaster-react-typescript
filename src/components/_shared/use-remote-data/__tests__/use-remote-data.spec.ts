import { renderHook } from '@testing-library/react-hooks';
import PodcasterError from '../../../../types/error-type';

import useRemoteData from '../use-remote-data';

describe('useRemoteData', () => {
	it('Should fetch data when fetching is succesfull', async () => {
		const remoteData = { foo: 'bar' };
		const loader = () => new Promise(resolve => setTimeout(() => resolve(remoteData), 10));
		const { result, waitForNextUpdate } = renderHook(() => useRemoteData(loader));

		expect(result.current.data).toBe(undefined);
		expect(result.current.error).toBe(undefined);
		expect(result.current.isLoading).toBe(true);

		await waitForNextUpdate();

		expect(result.current.data).toBe(remoteData)
		expect(result.current.error).toBe(undefined);
		expect(result.current.isLoading).toBe(false);
	});

	it('Should raise an error when fetching data fails', async () => {
		const error = new Error('Ouch!') as PodcasterError;
		error.statusCode = 412;
	
		const loader = () => new Promise((_, reject) => setTimeout(() => reject(error), 10));
		const { result, waitForNextUpdate } = renderHook(() => useRemoteData(loader));

		expect(result.current.data).toBe(undefined);
		expect(result.current.error).toBe(undefined);
		expect(result.current.isLoading).toBe(true);

		await waitForNextUpdate();

		expect(result.current.data).toBe(undefined)
		expect(result.current.error).toBe(error);
		expect(result.current.isLoading).toBe(false);
	});
});

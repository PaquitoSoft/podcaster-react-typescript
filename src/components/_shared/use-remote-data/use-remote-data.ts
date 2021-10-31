import { useState, useEffect } from 'react';
import { useGenericError, useLoader } from '../../app/application-providers/application-providers';

type HookState = {
	data?: any;
};

function useRemoteData(remoteLoader: Function): HookState {
	const { startLoader, stopLoader } = useLoader();
	const { setError } = useGenericError();
	const [remoteData, setRemoteData] = useState<HookState>({
		data: undefined
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				startLoader();
				const data = await remoteLoader();
				setRemoteData({ data });
			} catch (error) {
				setError(error as Error);
			} finally {
				stopLoader();
			}
		};

		fetchData();
	}, [remoteLoader, setError, startLoader, stopLoader]);

	return remoteData;
}

export default useRemoteData;

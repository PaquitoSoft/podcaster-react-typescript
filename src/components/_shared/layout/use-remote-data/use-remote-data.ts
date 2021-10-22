import { useState, useEffect } from 'react';

type HookState = {
	data?: any;
	isLoading: boolean;
	error?: Error
};

function useRemoteData(remoteLoader: Function): HookState {
	const [remoteData, setRemoteData] = useState<HookState>({
		data: undefined,
		isLoading: true,
		error: undefined
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await remoteLoader();
				setRemoteData({ data, isLoading: false });
			} catch (error) {
				setRemoteData({ error: error as Error, isLoading: false });
			}
		};

		fetchData();
	}, [remoteLoader]);

	return remoteData;
}

export default useRemoteData;

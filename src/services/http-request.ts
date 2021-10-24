import * as localStorage from './local-storage';

import Dictionary from '../types/dictionary-type';
import PodcasterError from '../types/error-type';

type GetDataRequest = {
	url: string;
	ttl?: number; // minutes
	headers?: Dictionary<string>;
};

type ResponseParser = (response: Response) => unknown;

const parsersMap: Dictionary<ResponseParser> = {
	'base': (response: Response) => response.text(),
	'text/plain': () => false,
	'text/html': () => false,
	'text/xml': () => false,
	'application/json': (response: Response) => response.json(),
};

function parseResponse(response: Response) {
	const contentType = response.headers.get('content-type') || 'base';
	const parser: ResponseParser = parsersMap[contentType] || parsersMap.base;

	return parser(response);
}

export async function getData({ url, headers, ttl }: GetDataRequest): Promise<any> {
	const result: any = localStorage.read(url);

	if (result) {
		return Promise.resolve(result);
	}

	const response: Response = await fetch(url, { headers: headers || {} });

	if (response.status >= 400) {
		const error: PodcasterError = new Error(response.statusText);
		error.statusCode = response.status;
		error.response = response;
		throw error;
	}

	const data = await parseResponse(response);

	if (ttl) {
		localStorage.store(url, data, { ttl });
	}

	return data;
}

import { mockRequest } from '../../test/mock-server';

import { getData } from "../http-request";

describe('HTTP Request service', () => {

	const FAKE_URL = 'https://www.nowhere.com/fake-resource';

	it('Should get data from a URL', async () => {
		const fakeData = { foo: 'bar' };
		mockRequest({
			url: FAKE_URL,
			responseData: fakeData
		});

		const data = await getData({ url: FAKE_URL });
		expect(data).toEqual(fakeData);
	});

	it('Should handle headers', async () => {
		const fakeData = { foo: 'bar' };
		const fakeHeaders = { 'X-fake-header': 'foobar' };
		mockRequest({
			url: FAKE_URL,
			responseData: fakeData,
			// TODO: How can I improve this so I don't need to be so verbose for this callback typing
			validateHeaders: (headers: { get: (headerName: string) => string; }) => {
				expect(headers.get('X-fake-header')).toBe('foobar');
			}
		});

		const data = await getData({ url: FAKE_URL, headers: fakeHeaders });
		expect(data).toEqual(fakeData);
	});

	it.todo('Should handle TTL');

});

export {};

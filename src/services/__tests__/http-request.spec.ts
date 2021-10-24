import { mockRequest } from '../../support/mock-server';
import * as localStorage from '../local-storage';

import { getData } from "../http-request";

jest.mock('../local-storage');

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
			validateHeaders: (headers: Headers) => {
				expect(headers.get('X-fake-header')).toBe('foobar');
			}
		});

		const data = await getData({ url: FAKE_URL, headers: fakeHeaders });
		expect(data).toEqual(fakeData);
	});

	it('Should handle TTL', async () => {
		const fakeData = { foo: 'bar' };
		const ttl = 15;
		mockRequest({
			url: FAKE_URL,
			responseData: fakeData
		});

		const data = await getData({ url: FAKE_URL, ttl });
		expect(data).toEqual(fakeData);
		expect(localStorage.store).toHaveBeenCalledWith(FAKE_URL, fakeData, { ttl });
	});

});

export {};

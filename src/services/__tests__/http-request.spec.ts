import { mockRequest } from '../../support/mock-server';
import * as localStorage from '../local-storage';
import PodcasterError from '../../types/error-type';

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

	it.only('Should handle response error', async () => {
		const statusCode = 412;
		mockRequest({
			url: FAKE_URL,
			statusCode,
			responseData: { foo: 'bar' }
		});

		expect.assertions(1);
		try {
			await getData({ url: FAKE_URL });
			expect(true).toBe(false);
		} catch (error) {
			// Jest ESLint rules complains about this code, but it's actually
			// in the Jest documentations about testing async behaviour
			// Reference: https://jestjs.io/docs/tutorial-async#error-handling
			// eslint-disable-next-line jest/no-conditional-expect
			expect((error as PodcasterError).statusCode).toBe(statusCode);
		}
	});

});

export {};

import { rest } from 'msw';
import { setupServer } from 'msw/node';

export enum HttpMethod {
	GET = 'get',
	POST = 'post'
}

export type HeadersValidator = (headers: Headers) => void;

// Reference: https://kentcdodds.com/blog/stop-mocking-fetch
const server = setupServer();

function mockRequest(
	{ url, responseData, type = HttpMethod.GET, validateHeaders }: 
		{ url: string, responseData: any, type?: HttpMethod, validateHeaders?: HeadersValidator }
): void {
	server.use(
		rest[type](url, (req, res, ctx) => {
			validateHeaders && validateHeaders(req.headers);
			return (res(ctx.status(200), ctx.json(responseData)));
		})
	);
}

export { server, rest, mockRequest };

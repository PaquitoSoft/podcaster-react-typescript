import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
	getBestPodcastsResponseData,
	getPodcastDetailResponseData
} from '../components/__fixtures__/ln-fixtures';
import LNPodcast from '../types/ln-podcast-type';

export enum HttpMethod {
	GET = 'get',
	POST = 'post'
}

export type HeadersValidator = (headers: Headers) => void;

// Reference: https://kentcdodds.com/blog/stop-mocking-fetch
const server = setupServer();

const mockRequest = (
	{ url, responseData, type = HttpMethod.GET, validateHeaders }: 
		{ url: string, responseData: any, type?: HttpMethod, validateHeaders?: HeadersValidator }
): void => {
	server.use(
		rest[type](url, (req, res, ctx) => {
			validateHeaders && validateHeaders(req.headers);
			return res(
				ctx.status(200),
				ctx.json((typeof responseData === 'function') ? responseData() : responseData)
			);
		})
	);
}

const mockBestPodcastsRequest = (fakePodcasts?: LNPodcast[]): LNPodcast[] => {
	const responseData = getBestPodcastsResponseData(fakePodcasts);
	mockRequest({
		url: 'https://listen-api.listennotes.com/api/v2/best_podcasts',
		responseData: () => getBestPodcastsResponseData(fakePodcasts)
	});

	return responseData.podcasts;
};

const mockPodcastDetailRequest = (podcastId?: string) => {
	const responseData = getPodcastDetailResponseData();
	mockRequest({
		url: `https://listen-api.listennotes.com/api/v2/podcasts/${podcastId || responseData.id}`,
		responseData
	})
};

export {
	server,
	rest,
	mockRequest,
	mockBestPodcastsRequest,
	mockPodcastDetailRequest
};


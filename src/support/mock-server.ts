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

type MockRequestConfig = {
	url: string,
	responseData: any,
	type?: HttpMethod,
	statusCode?: number,
	validateHeaders?: HeadersValidator
};

const mockRequest = ({
	url,
	responseData,
	type = HttpMethod.GET,
	statusCode = 200,
	validateHeaders 
}: MockRequestConfig): void => {
	server.use(
		rest[type](url, (req, res, ctx) => {
			validateHeaders && validateHeaders(req.headers);
			return res(
				ctx.status(statusCode),
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


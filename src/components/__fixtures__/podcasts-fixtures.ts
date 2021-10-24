import Podcast from "../../entities/podcast";
import { getBestPodcastsResponseData } from "./ln-fixtures";

export const getFakePodcast = () => new Podcast(getBestPodcastsResponseData().podcasts[0]);
export const getFakePodcastsList = () => getBestPodcastsResponseData().podcasts.map(lnPodcast => new Podcast(lnPodcast));


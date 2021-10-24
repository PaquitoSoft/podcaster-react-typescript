import Podcast from "../../entities/podcast";
import { getBestPodcastsResponseData } from "./ln-fixtures";

export const getFakePodcast = () => new Podcast(getBestPodcastsResponseData().podcasts[0]);


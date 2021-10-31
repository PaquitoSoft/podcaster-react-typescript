import Podcast from "../../../entities/podcast";
import Link, { LinkType } from "../../_shared/link/link";

import './podcast-card.css';

type Props = {
	podcast: Podcast
};

function PodcastCard({ podcast }: Props) {
	return (
		<div className="podcast-card" data-testid="podcast-card">
			<Link to={`/podcast/${podcast.id}`} type={LinkType.SECONDARY}>
				<div className="podcast-card__cover-container">
					<img className="podcast-card__cover-image" src={podcast.imageUrl} alt={podcast.title} />
				</div>
				<div className="podcast-card__info">
					<h4 className="podcast-card__title">{podcast.title}</h4>
					<p>
						<span className="podcast-cart__author">
							<span>Author:&nbsp;</span>
							<span>{podcast.author}</span>
						</span>
					</p>
				</div>
			</Link>
		</div>
	);
}

export default PodcastCard;

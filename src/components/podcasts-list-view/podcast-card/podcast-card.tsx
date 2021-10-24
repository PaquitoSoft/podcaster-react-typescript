import { Link } from "react-router-dom";
import Podcast from "../../../entities/podcast";

import './podcast-card.css';

type Props = {
	podcast: Podcast
};

function PodcastCard({ podcast }: Props) {
	return (
		<div className="podcast-card box" data-testid="podcast-card">
			<Link to={`/podcast/${podcast.id}`}>
				<div className="box-icon">
					<img src={podcast.imageUrl} alt={podcast.title} />
				</div>
				<div className="info">
					<h4 className="podcast-title">{podcast.title}</h4>
					<p>
						<span className="podcast-author">
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

import Link from '../../../link/link';
import Podcast from '../../../../../entities/podcast';

import './podcast-sidebar-info.css';

type Props = {
	podcast?: Podcast;
	className?: string;
};

function PodcastSidebarInfo({ podcast, className }: Props) {
	return (
		<aside className={className}>
			<div className="section sidebar">
				<div className="podcast-cover text-center">
					<Link to={`/podcast/${podcast?.id}`}>
						<img src={podcast?.imageUrl} alt={podcast?.title} />
					</Link>
				</div>
				<hr />
				<div className="podcast-title">
					<Link to={`/podcast/${podcast?.id}`}>
						<div className="title">{podcast?.title}</div>
						<div className="author"><span>&nbsp;</span>{podcast?.author}</div>
					</Link>
				</div>
				<hr />
				<div className="podcast-description">
					<div>Description:</div>
					<div dangerouslySetInnerHTML={{ __html: podcast?.description || '' }}></div>
				</div>
			</div>
		</aside>
	);
}

export default PodcastSidebarInfo;

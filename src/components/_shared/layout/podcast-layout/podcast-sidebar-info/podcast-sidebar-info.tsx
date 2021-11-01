import Podcast from '../../../../../entities/podcast';
import Link, { LinkType } from '../../../link/link';
import Separator from '../../../separator/separator';
import Translation from '../../../translation/translation';

import './podcast-sidebar-info.css';

type Props = {
	podcast?: Podcast;
	className?: string;
};

function PodcastSidebarInfo({ podcast, className }: Props) {
	return (
		<aside className={`podcast-sidebar-info ${className}`}>
			<div className="section sidebar">
				<Link to={`/podcast/${podcast?.id}`}>
					<img className="podcast-sidebar-info__cover" src={podcast?.imageUrl} alt={podcast?.title} />
				</Link>
				<Separator />
				<div className="podcast-sidebar-info__main-info">
					<Link to={`/podcast/${podcast?.id}`} type={LinkType.SECONDARY}>
						<div className="podcast-sidebar-info__title">{podcast?.title}</div>
						<div className="podcast-sidebar-info__author"><span>&nbsp;</span>{podcast?.author}</div>
					</Link>
				</div>
				<Separator />
				<div className="podcast-sidebar-info__description">
					<div className="podcast-sidebar-info__description-title"><Translation name="podcast-sidebar-info.description" /></div>
					<div className="podcast-sidebar-info__description-content" dangerouslySetInnerHTML={{ __html: podcast?.description || '' }}></div>
				</div>
			</div>
		</aside>
	);
}

export default PodcastSidebarInfo;

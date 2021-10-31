import Podcast from '../../../../entities/podcast';
import DefaultLayout from '../default-layout/default-layout';
import PodcastSidebarInfo from './podcast-sidebar-info/podcast-sidebar-info';

type Props = {
	podcast?: Podcast;
	children: JSX.Element;
};

function PodcastLayout({ podcast, children }: Props) {
	return (
		<DefaultLayout hasSidebar>
			<PodcastSidebarInfo className="sidebar-section" podcast={podcast} />
			<section className="content-section">
				{!podcast && <div>Loading...</div>}
				{!!podcast && children}
			</section>
		</DefaultLayout>
	);
}

export default PodcastLayout;

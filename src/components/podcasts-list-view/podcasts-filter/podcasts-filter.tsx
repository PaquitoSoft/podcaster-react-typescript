import { useI18n } from '../../app/application-providers/i18n-provider/i18n-provider';
import './podcasts-filter.css';

type Props = {
	filteredPodcastsCount: number;
	onFilter: (filterText: string) => void
};

function PodcastsFilter({ filteredPodcastsCount, onFilter }: Props) {
	const { getText } = useI18n();
	return (
		<div className="podcasts-filter">
			<span className="podcasts-filter__badge" data-testid="podcast-filter-count">{filteredPodcastsCount}</span>
			<input 
				className="podcasts-filter__filter"
				type="text" 
				name="filter-value" 
				placeholder={getText('podcast-list-view.filter-placeholder')}
				onChange={(event) => onFilter(event.target.value)}
			/>
	  </div>
	);
}

export default PodcastsFilter;

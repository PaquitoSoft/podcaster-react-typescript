import './podcasts-filter.css';

type Props = {
	filteredPodcastsCount: number;
	onFilter: (filterText: string) => void
};

function PodcastsFilter({ filteredPodcastsCount, onFilter }: Props) {
	return (
		<div className="podcasts-filter">
			<span className="podcasts-filter__badge" data-testid="podcast-filter-count">{filteredPodcastsCount}</span>
			<input 
				className="podcasts-filter__filter"
				type="text" 
				name="filter-value" 
				placeholder="Filter podcasts..."
				onChange={(event) => onFilter(event.target.value)}
			/>
	  </div>
	);
}

export default PodcastsFilter;

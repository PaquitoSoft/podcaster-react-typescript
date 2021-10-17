import './podcasts-filter.css';

type Props = {
	filteredPodcastsCount: number;
	onFilter: (filterText: string) => void
};

function PodcastsFilter({ filteredPodcastsCount, onFilter }: Props) {
	return (
		<div className="podcasts-filter">
			<span className="badge">{filteredPodcastsCount}</span>
			<input 
				type="text" 
				name="filter-value" 
				placeholder="Filter podcasts..."
				onChange={(event) => onFilter(event.target.value)}
			/>
	  </div>
	);
}

export default PodcastsFilter;

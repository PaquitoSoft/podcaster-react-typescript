import { useEffect } from 'react';

import { getBestPodcasts, getPodcastDetail } from './apis/podcasts-api';

import logo from './logo.svg';
import './App.css';

function App() {

	useEffect(() => {
		const fetchData = async () => {
			const podcasts = await getBestPodcasts();
			const podcastDetail = await getPodcastDetail(podcasts[0].id);

			console.log({ podcasts, podcastDetail });
		};

		fetchData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

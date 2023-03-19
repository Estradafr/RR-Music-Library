import './styles/App.css';

import {useEffect, useState} from 'react';
import {Gallery} from './components/Gallery';
import {SearchBar} from './components/SearchBar';

export function App() {
	let [search, setSearch] = useState('');
	let [message, setMessage] = useState('Search music!');
	let [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://itunes.apple.com/search?term=${search}`)
			.then((response) => response.json())
			.then(({resultCount, results}) => {
				const successMessage = `Successfully fetched ${resultCount} result(s)!`;
				const errorMessage = 'Not found';
				setMessage(resultCount ? successMessage : errorMessage);
				setData(results);
			});
	}, [search]);

	return (
		<div className="App">
			<SearchBar setSearch={setSearch} />
			{message}
			<Gallery data={data} />
		</div>
	);
}

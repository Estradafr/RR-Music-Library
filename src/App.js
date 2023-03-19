import './styles/App.css';

import {Fragment, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Gallery} from './components/Gallery';
import {SearchBar} from './components/SearchBar';
import {ArtistView} from './components/artistView';
import {AlbumView} from './components/albumView';

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
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<SearchBar setSearch={setSearch} />
								{message}
								<Gallery data={data} />
							</>
						}
					/>

					<Route
						path="/album/:id"
						element={<AlbumView />}
					/>

					<Route
						path="/artist/:id"
						element={<ArtistView />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

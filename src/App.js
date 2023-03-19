import './styles/App.css';

import {useEffect, useState, useRef} from 'react';
import {SearchBar} from './components/SearchBar';
import {Wrapper} from './components/Wrapper';
import {DataContext} from './context/dataContext';
import {SearchContext} from './context/searchContext';

export function App() {
	let [message, setMessage] = useState('Search your favorite songs!');
	let [data, setData] = useState([]);
	// useRef(1) returns {current: 1}
	let numberRef = useRef(1);
	let inputRef = useRef();

	const fetchData = (search) => {
		document.title = inputRef.current.value;
		fetch(`https://itunes.apple.com/search?term=${inputRef.current.value}`)
			.then((response) => response.json())
			.then(({resultCount, results}) => {
				const successMessage = `You fetched ${resultCount} result(s)!`;
				const errorMessage = 'Nothing was fetched';
				setMessage(resultCount ? successMessage : errorMessage);
				setData(results);
				console.log(
					`The number of calls made is currently: ${numberRef.current++}`
				);
			});
	};

	return (
		<div className="App">
			<SearchContext.Provider value={{ref: inputRef, fetchData}}>
				<SearchBar />
			</SearchContext.Provider>
			{message}
			<DataContext.Provider value={data}>
				<Wrapper />
			</DataContext.Provider>
		</div>
	);
}

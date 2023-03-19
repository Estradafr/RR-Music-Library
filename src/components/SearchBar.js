import {useEffect, useState} from 'react';

export function SearchBar({setSearch}) {
	const [query, setQuery] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	/* 
    To perform ther search as we type
    useEffect(()=>{
        setSearch(query)
    }, [query]) 
    
    */

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(query);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={query}
				onChange={handleChange}
			/>
			<input
				type="submit"
				value="Search"
			/>
		</form>
	);
}

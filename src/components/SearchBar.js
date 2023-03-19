import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

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
		// 	<form onSubmit={handleSubmit}>
		// 		<input
		// type="text"
		// value={query}
		// onChange={handleChange}
		// 		/>
		// <input
		// 	type="submit"
		// 	value="Search"
		// />
		// 	</form>

		<div>
			<Form onSubmit={handleSubmit}>
				<InputGroup className="mb-3">
					<Form.Control
						value={query}
						onChange={handleChange}
						placeholder="Search a song!"
					/>
					<Button
						variant="outline-primary"
						value="search"
					>
						Search
					</Button>
				</InputGroup>
			</Form>
		</div>
	);
}

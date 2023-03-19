import ListGroup from 'react-bootstrap/ListGroup';

// These components will be making separate API calls from the app
// component to serve specific data about our artist
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Container} from 'react-bootstrap';

export function ArtistView() {
	const [albums, setAlbums] = useState([]);
	const [artistData, setArtistData] = useState({});
	const {id} = useParams();

	useEffect(() => {
		console.log('Making a backend request!');
		fetch(`http://localhost:4000/album/${id}`)
			.then((response) => response.json())
			.then(({results}) => {
				setArtistData(results.shift());
				setAlbums(results);
			});
	}, [id]);

	return (
		<div>
			<h1>{artistData.artistName}</h1>
			<h2>Genre: {artistData.primaryGenreName}</h2>
			<Container>
				<ListGroup
					className="mx-auto"
					// variant="flush"
				>
					{albums.map((album) => {
						return (
							<ListGroup.Item
								style={{marginBottom: '.3rem'}}
								variant="dark"
							>
								<Link
									to={`/album/${album.collectionId}/`}
									style={{textDecoration: 'none'}}
								>
									{album.collectionName}
								</Link>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Container>
		</div>
	);
}

// Original Styling
// <li>
// 	<Link to={`/album/${album.collectionId}/`} />
// 	{album.collectionName}
// </li>

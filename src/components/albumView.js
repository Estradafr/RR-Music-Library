import ListGroup from 'react-bootstrap/ListGroup';
import './gallery-styles/listStyling.css';

// These components will be making separate API calls from the app
// component to serve specific data about a given album
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Col, Container, ListGroupItem, Row} from 'react-bootstrap';

export function AlbumView() {
	const [albumData, setAlbumData] = useState([]);
	const [songs, setSongs] = useState([]);
	const {id} = useParams();

	useEffect(() => {
		fetch(`http://localhost:4000/song/${id}`)
			.then((response) => response.json())
			.then(({results}) => {
				setAlbumData(results.shift());
				setSongs(results);
			});
	});

	return (
		<div>
			<h1>{albumData.collectionName}</h1>
			<Link
				to={`/../artist/${albumData.artistId}`}
				style={{textDecoration: 'none'}}
			>
				<h2>{albumData.artistName}</h2>
			</Link>
			<h2>Genre: {albumData.primaryGenreName}</h2>
			<Container fluid>
				{songs.map((song) => {
					return (
						<ListGroup
							horizontal
							className="mx-auto mb-1 "

							// variant="flush"
						>
							<ListGroup.Item variant="dark">
								<Row style={{width: '500px', alignItems: 'center'}}>
									<Col>
										<img
											src={`${song.artworkUrl60}`}
											alt={`${song.collectionName}`}
										/>
									</Col>
									<Col> {song.trackName}</Col>
									<Col>{song.trackNumber}</Col>
								</Row>
								{/* <img
									src={`${song.artworkUrl60}`}
									alt={`${song.collectionName}`}
								/>
								{song.trackName} */}
							</ListGroup.Item>
						</ListGroup>
						// <ListGroup.Item>
						// <img
						// 	src={`${song.artworkUrl100}`}
						// 	alt={`${song.trackName}`}
						// 	className="align-items-start"
						// />
						// </ListGroup.Item>
					);
				})}
			</Container>
		</div>
	);
}

// Original Styling
// <div>
// 	<h1>{albumData.collectionName}</h1>
// <Link to={`/../artist/${albumData.artistId}`}>
// 	<h2>{albumData.artistName}</h2>
// </Link>
// 	<h2>{albumData.primaryGenreName}</h2>
// <ul>
// 	{songs.map((song) => {
// 		return <li>{song.trackName}</li>;
// 	})}
// </ul>
// </div>

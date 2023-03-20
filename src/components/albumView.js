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
			<h1>
				<img
					src={`${albumData.artworkUrl60}`}
					alt={`${albumData.artworkUrl60}`}
					style={{width: '150px'}}
				/>
			</h1>
			<h2>{albumData.collectionName}</h2>
			<Link
				to={`/../artist/${albumData.artistId}`}
				style={{textDecoration: 'none'}}
			>
				<h2>{albumData.artistName}</h2>
			</Link>
			<h4>Genre: {albumData.primaryGenreName}</h4>
			<Container fluid>
				{songs.map((song) => {
					return (
						<ListGroup
							horizontal
							className="mx-auto mb-1 "
							// variant="flush"
						>
							<ListGroup.Item
								style={{backgroundColor: 'rgb(33,37,41)', color: 'white'}}
							>
								<Row
									style={{
										width: '50rem',
										height: '6.5em',
										alignItems: 'center',
									}}
								>
									<Col>{song.trackNumber}</Col>
									<Col>{song.trackName}</Col>
									<Col>$ {song.trackPrice}</Col>
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

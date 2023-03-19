// These components will be making separate API calls from the app
// component to serve specific data about a given album
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

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
			<Link to={`/../artist/${albumData.artistId}`}>
				<h2>{albumData.artistName}</h2>
			</Link>
			<h2>{albumData.primaryGenreName}</h2>
			<ul>
				{songs.map((song) => {
					return <li>{song.trackName}</li>;
				})}
			</ul>
		</div>
	);
}

import './gallery-styles/detailedStyle.css';
import './gallery-styles/simpleStyle.css';

import {useState} from 'react';
import {useParams, Link} from 'react-router-dom';

export function GalleryItem({song}) {
	const {
		trackName,
		artistId,
		artistName,
		collectionName,
		primaryGenreName,
		collectionId,
		artworkUrl100,
	} = song;

	const [isExpanded, setIsExpanded] = useState(false);

	const detailedStyle = {
		backgroundImage: `url(${artworkUrl100}`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	};

	const handleClick = (e) => {
		setIsExpanded(!isExpanded);
	};

	const simpleView = (
		<div
			className="SimpleStyle"
			onClick={handleClick}
		>
			<h3>{trackName}</h3>
			<h4>{artistName}</h4>
		</div>
	);

	const detailedView = (
		<div
			className="DetailedStyle"
			onClick={handleClick}
			style={detailedStyle}
		>
			<h2>{trackName}</h2>
			<h3>
				<Link to={`/artist/${artistId}`}>{artistName}</Link>
			</h3>
			<h3>
				<Link to={`/album/${collectionId}`}>{collectionName}</Link>
			</h3>
			<h4>{primaryGenreName}</h4>
		</div>
	);

	return isExpanded ? detailedView : simpleView;
}

import './gallery-styles/detailedStyle.css';
import './gallery-styles/simpleStyle.css';

import {useState} from 'react';

export function GalleryItem({song}) {
	const [isExpanded, setIsExpanded] = useState(false);

	const {trackName} = song;

	const detailedStyle = {
		backgroundImage: `url(${song.artworkUrl100}`,
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
			<h3>{song.trackName}</h3>
			<h4>{song.collectionName}</h4>
		</div>
	);

	const detailedView = (
		<div
			className="DetailedStyle"
			onClick={handleClick}
			style={detailedStyle}
		>
			<h2>{song.trackName}</h2>
			<h3>{song.collectionName}</h3>
			<h4>{song.primaryGenreName}</h4>
		</div>
	);

	return isExpanded ? detailedView : simpleView;
}

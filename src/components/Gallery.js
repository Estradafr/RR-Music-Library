import {useContext} from 'react';
import {DataContext} from '../context/dataContext';
import {GalleryItem} from './GalleryItem';

export function Gallery(props) {
	const data = useContext(DataContext);

	const songs = data.filter((result) => result.kind === 'song');

	return (
		<div className="gallery">
			{songs.map((song) => (
				<GalleryItem
					song={song}
					key={song.trackId}
				/>
			))}
		</div>
	);
}

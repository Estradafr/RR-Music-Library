import {useState} from 'react';

import {GalleryItem} from './GalleryItem';

export function Gallery({data}) {
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

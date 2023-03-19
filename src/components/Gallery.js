import {useState} from 'react';
import {GalleryDisplay} from './GalleryDisplay';
import {GalleryItem} from './GalleryItem';

export function Gallery({data}) {
	const songs = data.filter((result) => result.kind === 'song');

	return (
		<div className="gallery">
			{songs.map((song) => (
				<GalleryDisplay
					song={song}
					key={song.trackId}
				/>
			))}
		</div>
	);
}

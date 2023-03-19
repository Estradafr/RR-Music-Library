import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {
	Container,
	ListGroup,
	Row,
	Card,
	Col,
	Button,
	ListGroupItem,
} from 'react-bootstrap';

export function GalleryDisplay({song}) {
	const {
		trackName,
		trackCount,
		artistId,
		artistName,
		collectionName,
		primaryGenreName,
		collectionId,
		artworkUrl100,
		artworkUrl60,
	} = song;

	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = (e) => {
		setIsExpanded(!isExpanded);
	};

	const gridView = (
		<Card
			bg="dark"
			style={{width: '23rem', color: 'white', margin: '.3rem'}}
			onClick={handleClick}
		>
			<Card.Img
				variant="top"
				src={`${artworkUrl100}`}
			/>
			<Card.Body>
				<Card.Title>
					<Link
						to={`/artist/${artistId}`}
						style={{textDecoration: 'none'}}
					>
						{collectionName}
					</Link>
				</Card.Title>
				<Card.Text>
					<Link
						to={`/album/${collectionId}`}
						style={{textDecoration: 'none'}}
					>
						{trackName}
					</Link>
					<br />
					{primaryGenreName}
					<br />
					{artistName}
				</Card.Text>
			</Card.Body>
		</Card>
	);

	const listView = (
		<div onClick={handleClick}>
			<Container fluid>
				<ListGroup className="mx-auto mb-1">
					<ListGroup.Item
						action
						variant="dark"
					>
						<Row
							style={{width: '29.5em', height: '10em', alignItems: 'center'}}
						>
							<Col>
								<img
									src={`${artworkUrl100}`}
									alt={trackName}
								/>
							</Col>
							<Col>
								<Link
									to={`/../artist/${artistId}`}
									style={{textDecoration: 'none'}}
								>
									<h5>{trackName}</h5>
								</Link>
							</Col>
							<Col>{collectionName}</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
			</Container>
		</div>
	);

	return isExpanded ? gridView : listView;
}

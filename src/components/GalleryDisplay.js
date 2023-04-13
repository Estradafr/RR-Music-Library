import { useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ArrowRightCircleFill } from 'react-bootstrap-icons';

export function GalleryDisplay({ song }) {
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

  const handleClick = (e) => {
    setIsExpanded(!isExpanded);
  };

  const gridView = (
    <Card
      bg='dark'
      style={{ width: '23rem', color: 'white', margin: '.3rem' }}
      onClick={handleClick}
    >
      <Card.Img
        variant='top'
        src={`${artworkUrl100}`}
      />
      <Card.Body>
        <Card.Title>
          <Link
            to={`/artist/${artistId}`}
            style={{ textDecoration: 'none' }}
          >
            {collectionName}
          </Link>
        </Card.Title>
        <Card.Text>
          <Link
            to={`/album/${collectionId}`}
            style={{ textDecoration: 'none' }}
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
        <ListGroup className='mb-2'>
          <ListGroup.Item
            style={{ backgroundColor: 'rgb(33,37,41)', color: 'white' }}
          >
            <Row
              style={{ width: '68rem', height: '12em', alignItems: 'center' }}
            >
              <Col>
                <Link
                  to={`/../album/${artistId}`}
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    src={`${artworkUrl100}`}
                    alt={trackName}
                    style={{ width: '190px' }}
                  />
                </Link>
              </Col>
              <Col>
                <h5>{trackName}</h5>
              </Col>
              <Col>{primaryGenreName}</Col>
              <Col>
                <Link
                  to={`/../artist/${artistId}`}
                  style={{ textDecoration: 'none' }}
                >
                  <ArrowRightCircleFill className='fs-2' />
                </Link>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );

  return isExpanded ? listView : gridView;
}

import React from 'react';
import './ArtPiece.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ArtPieceDetail from '../artPieceDetail/ArtPieceDetail';

function ArtPiece(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${props.data.images?.web?.url}`} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.creators?.[0]?.description}</Card.Text>
          <Card.Text>{props.data?.culture?.[0]} </Card.Text>
          <Button onClick={handleShow} variant="primary">
            Add To Favorite
          </Button>
        </Card.Body>
      </Card>
      <ArtPieceDetail
        DetailData={props.data}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        commentHandler={props.commentHandler}
      />
    </div>
  );
}

export default ArtPiece;

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
        <Card.Img variant="top" src={`${props.data.image}`} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.artist}</Card.Text>
          <Card.Text>{props.data.place} </Card.Text>
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

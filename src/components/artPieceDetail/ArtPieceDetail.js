import React from 'react';
import './ArtPieceDetail.css';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useRef, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

function ArtPieceDetail({
  handleShow,
  handleClose,
  show,
  DetailData,
  commentHandler,
  artkey,
}) {
  const { user, isAuthenticated } = useAuth0();

  const [comment, setComment] = useState('');
  const commentRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const userComment = commentRef.current.value;
    const newArt = { ...DetailData, userComment };
    setComment(userComment);
    commentHandler(newArt, newArt.id);
  }

  async function handleAddFav(e) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER_URL}/addNewArt`;
    let data = {
      title: DetailData.title,
      artist: DetailData.artist,
      image: DetailData.image,
      description: DetailData.description,
      place: DetailData.place,
      comment: DetailData.comment,
      userid: user.sub,
    };
    console.log('data from add fav', data);
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    let receivedData = await response.json();
    console.log('receivedData', receivedData);
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{DetailData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: '100%' }}
            src={`${DetailData.image}`}
            alt={DetailData.title}
          />
          <p> {DetailData.artist} </p>
          <p> {DetailData.description} </p>
          <p> {DetailData.place} </p>

          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Type Your Comment here"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {isAuthenticated && (
              <Button variant="primary" onClick={(e) => handleAddFav(e)}>
                Add To Favorites
              </Button>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ArtPieceDetail;

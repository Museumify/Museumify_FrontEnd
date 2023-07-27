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
      <Modal show={show} onHide={handleClose} size='xl' className="my-modal" >
        <Modal.Header closeButton>
          <Modal.Title><h1 style={{fontFamily: "Lucida Console"}}>{DetailData.title}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div style={{width:'40%',float:'left'}}>
          <img
            style={{ width: '100%',height:'400px' }}
            src={`${DetailData.image}`}
            alt={DetailData.title}
          />
          <p style={{fontFamily: "Lucida Console",marginTop:'10px'}}><b>ARTIST NAME :</b> {DetailData.artist} </p>
          <p style={{fontFamily: "Lucida Console"}}><b>PLACE :</b> {DetailData.place} </p>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Type Your Comment here"
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{float:'right',fontFamily: "Lucida Console"}}>
              Submit
            </Button>
          </Form>
          </div>
          <div style={{width:'55%',marginRight:'2%',float:'right'}}>
          <p style={{fontFamily: "Lucida Console"}} ><b>ARTPIECE DESCRIPTION :</b> </p>
          <p style={{fontFamily: "Lucida Console",textAlign:'justify',wordSpacing: '5px'}}> {DetailData.description} </p>
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{fontFamily: "Lucida Console"}}>
            Close
          </Button>

          {isAuthenticated && (
          <Button variant="primary" style={{fontFamily: "Lucida Console"}} onClick={e => handleAddFav(e)}>
            Save Changes
          </Button>)}

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ArtPieceDetail;

import React from "react";
import './ArtPieceDetail.css';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useRef,useState } from 'react';

function ArtPieceDetail({handleShow,handleClose,show,DetailData,commentHandler}) {
    const [comment, setComment] = useState("");
    const commentRef = useRef();
  
    function handleSubmit(e) {
      e.preventDefault();
      const userComment=commentRef.current.value;
      const newArt={...DetailData,userComment};
      setComment(userComment);
      commentHandler(newArt,newArt.id);
      console.log(comment);
    }
  
    
    async function handleAddFav(e){
      e.preventDefault();
      let url = `${process.env.REACT_APP_SERVER_URL}/addNewArt`;
      let data = {
        title:DetailData.title,
        artist:DetailData.artist,
        image:DetailData.image,
        description:DetailData.description,
        place:DetailData.place,
        comment:DetailData.comment
      }
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      let recivedData = await response.json();
      console.log('recivedData', recivedData);
     
    }
    return(
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{DetailData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{width:'100%'}} src={`${DetailData.image}`} alt={DetailData.title}/>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={commentRef} type="text" placeholder="Type Your Comment here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="primary" onClick={(e) => handleAddFav(e)}>
              Add To Favorite
            </Button>
          </Form>
          {DetailData.comment ? DetailData.comment : "No Comment Added"}
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
    )
}

export default ArtPieceDetail;
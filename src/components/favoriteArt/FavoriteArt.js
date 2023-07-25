import React from 'react'
import './FavoriteArt.css'
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import NewCardForm from './NewCardForm';
import { useAuth0 } from '@auth0/auth0-react';

function FavoriteArt() {
  const [favArt, setFavArt] = useState([]);
  const [show, setShow] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  async function handleFavArt() {
    const url = `${process.env.REACT_APP_SERVER_URL}/allArts`;
    let response = await fetch(url);
    let recivedData = await response.json();
    setFavArt(recivedData);
  }
  async function handleDelete(id) {
    const url = `${process.env.REACT_APP_SERVER_URL}/delete/${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    });
    console.log(response)
    handleFavArt();
  }

  useEffect(() => {
    handleFavArt();

  }, []);

  async function handleUpdate(id, updatedComment) {
    const url = `${process.env.REACT_APP_SERVER_URL}/update/${id}`;
    let response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: updatedComment }),
    });
    if (response.status === 200) {
      alert('COMMENT UPDATED SUCCESSFULLY');
      setFavArt(prevState =>
        prevState.map(art => {
          if (art.id === id) {
            return { ...art, comment: updatedComment }; // Update the comment of the specific movie
          }
          return art;
        })
      );
    }
  }


  const userFavArt =  isAuthenticated&&user&&user.sub ? favArt.filter((obj) => obj.userid === user.sub) : []

  return (
    <div>
      <div style={{ float: 'left', width: '100%' }}>
        <Button style={{ marginTop: '20px', float: 'right', marginRight: '20px', borderRadius: '50px' }} onClick={handleShow} variant="secondary"><h1 style={{ paddingLeft: '10px', paddingRight: '10px' }}>+</h1></Button>
      </div>
  
      <div className="main">
        {isAuthenticated && user && user.sub ? favArt.filter((obj) => obj.userid === user.sub) : []}
        {
          userFavArt.length > 0 ?
          userFavArt.map((art, id) => (
            <Card key={id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${art.image}`} style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{art.title}</Card.Title>
                <Card.Text> {(art.artist)} </Card.Text>
                <Card.Text>{(art.description)}</Card.Text>
                <Card.Text> {(art.place)} </Card.Text>
                <Card.Text> {(art.comment)} </Card.Text>
                <Button variant="danger" style={{ position: 'absolute', bottom: '2px', left: '30%', transform: 'translateX(-50%)' }} onClick={() => handleDelete(art.id)}>Delete</Button>
                <Button variant="success" style={{ position: 'absolute', bottom: '2px', left: '70%', transform: 'translateX(-50%)' }} onClick={() => {
                  const updatedComment = prompt('Enter the updated comment:');
                  if (updatedComment !== null && updatedComment.trim() !== '') {
                    handleUpdate(art.id, updatedComment);
                  }
                }}>Update</Button>
              </Card.Body>
            </Card>
          ))
          :
          "No fav list"
        }
        <NewCardForm handleClose={handleClose} handleShow={handleShow} show={show} />
      </div>
    </div>
  )
}

      export default FavoriteArt;
import React from 'react'
import './FavoriteArt.css'
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';

function FavoriteArt(){
    const [favArt, setFavArt] = useState([]);
    const { user, isAuthenticated} = useAuth0();


    async function handleFavArt() {
      const url = `${process.env.REACT_APP_SERVER_URL}/allArts`;
      let response = await fetch(url);
      let recivedData = await response.json();
      setFavArt(recivedData);
    }
    async function handleDelete(id){
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

    const userFavArt =  isAuthenticated&&user&&user.sub ? favArt.filter((obj) => obj.userid === user.sub) : []

    return(
        <div className="main">
      
        {
        userFavArt.length > 0 ?
        userFavArt.map((art, id) => (    
            <Card key={id} style={{ width: '18rem'}}>
            <Card.Img variant="top" src={`${art.image}`} />
            <Card.Body>
              <Card.Title>{art.title}</Card.Title>
              <Card.Text> {(art.artist)} </Card.Text>
              <Card.Text> {(art.description)} </Card.Text>
              <Card.Text> {(art.place)} </Card.Text>
              <Card.Text> {(art.comment)} </Card.Text>
                <Button variant="danger" onClick={()=> handleDelete(art.id)}>Delete</Button>
                <Button variant="success">Update</Button>
            </Card.Body>
          </Card>
        ))
        :
        "No fav list"
        
        }
      </div>
    )
}

export default FavoriteArt;
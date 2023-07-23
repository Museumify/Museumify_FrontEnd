import React from 'react'
import './FavoriteArt.css'
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function FavoriteArt(){
    const [favArt, setFavArt] = useState([]);

    

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
    return(
        <div className="main">
        {favArt.map((art, id) => (
            
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
        ))}
      </div>
    )
}

export default FavoriteArt;
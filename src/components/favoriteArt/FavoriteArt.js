import React from 'react';
import './FavoriteArt.css';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import NewCardForm from './NewCardForm';
import { useAuth0 } from '@auth0/auth0-react';
import image from "../assets/backgroundImage.png";


function FavoriteArt() {
  const [favArt, setFavArt] = useState([]);
  const [show, setShow] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleFavArt() {
    const url = `${process.env.REACT_APP_SERVER_URL}/allArts`;
    let response = await fetch(url);
    let receivedData = await response.json();
    setFavArt(receivedData);
  }
  async function handleDelete(id) {
    const url = `${process.env.REACT_APP_SERVER_URL}/delete/${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    handleFavArt();
  }

  useEffect(() => {
    handleFavArt();
  }, []);

  async function handleUpdate(id, updatedComment) {
    const url = `${process.env.REACT_APP_SERVER_URL}/update/${id}`;
    let response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: updatedComment }),
    });
    if (response.status === 200) {
      alert('COMMENT UPDATED SUCCESSFULLY');
      setFavArt((prevState) =>
        prevState.map((art) => {
          if (art.id === id) {
            return { ...art, comment: updatedComment };
          }
          return art;
        })
      );
    }
  }

  const userFavArt =
    isAuthenticated && user && user.sub
      ? favArt.filter((obj) => obj.userid === user.sub)
      : [];

  return (
    <div>
      <div style={{ float: 'left', width: '100%' }} title="Add Your Art Piece!">
        <Button
          style={{
            marginTop: '0px',
            float: 'right',
            marginRight: '20px',
            borderRadius: '70px',
            // backgroundColor:"#C88EA7"
            backgroundImage: `url(${image})`,
            borderStyle:"none",
          }}
          onClick={handleShow}
          variant="secondary"
        >
          <h1 style={{ paddingLeft: '10px', paddingRight: '10px' }}>+</h1>
        </Button>
      </div>

      

    <div className="card" style={{ display: 'flex', flexWrap: 'wrap' , flexDirection:'row'}}>
      {userFavArt.length > 0 ? (
        userFavArt.map((art, id) => (
          <Card
            key={id}
            style={{
              flex: '0 0 calc(50% - 20px)',
              margin: '10px',
              overflow: 'auto',
              display: 'flex',
              flexDirection:'row',
              
              }}
          >
            <div  >
            <img src={`${art.image}`} alt={"Logo"}
             style={{ objectFit: 'contain', width:'300px'  }}
               
              /> 
              
            </div>  
            
            <div style={{ display: 'flex', flexDirection: 'column',textAlign:'start'
            ,marginLeft:"20px"  }}> 

              <Card.Title>{art.title}</Card.Title>
              <Card.Text>{art.artist}</Card.Text>
             
              <Card.Text>{art.place}</Card.Text>
              <Card.Text>{art.comment}</Card.Text>
              <div style={{ display: 'flex', justifyContent:'center', marginBottom:"10px"}}>
                <Button style={{marginRight:'40px'}}
                  variant="danger"
                  onClick={() => handleDelete(art.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    const updatedComment = prompt('Enter the updated comment:');
                    if (updatedComment !== null && updatedComment.trim() !== '') {
                      handleUpdate(art.id, updatedComment);
                    }
                  }}
                >
                  Update
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div>No Favorite Art Pieces Were Added</div>
      )}
      <NewCardForm handleClose={handleClose} handleShow={handleShow} show={show} />
    </div>
  </div>
  );

}

export default FavoriteArt;

import React from 'react';
import './ArtPiece.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ArtPieceDetail from '../artPieceDetail/ArtPieceDetail';

function ArtPiece(props) {
    //console.log(props.data.id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
            <Card style={{ width: '18rem', height: '400px',border:'none'}} >
                <Card.Img variant="top" src={`${props.data.image}`} style={{ height: '300px', objectFit: 'cover',borderRadius:'10px' }} class="zoom"/>
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Button style={{ marginLeft: '200px' }}
                        onClick={handleShow} variant="dark">Show</Button>

                </Card.Body> 
            </Card>
            <ArtPieceDetail DetailData={props.data} artkey={props.data.id} handleClose={handleClose} handleShow={handleShow} show={show} commentHandler={props.commentHandler} />

        </div>
    )
}

export default ArtPiece;

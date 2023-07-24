import React from "react";
import './ArtPiece.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ArtPieceDetail from '../artPieceDetail/ArtPieceDetail'


function ArtPiece(props) {
    //console.log(props.data.id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card style={{ width: '18rem', height: '550px' }}>
                <Card.Img variant="top" src={`${props.data.image}`} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {(props.data.artist)}
                    </Card.Text>


                    <Button style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
                        onClick={handleShow} variant="primary">Show details</Button>

                </Card.Body> 
            </Card>
            <ArtPieceDetail DetailData={props.data} artkey={props.data.id} handleClose={handleClose} handleShow={handleShow} show={show} commentHandler={props.commentHandler} />

        </div>
    )
}

export default ArtPiece;
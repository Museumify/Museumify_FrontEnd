import React from 'react';
import './ArtPiece.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ArtPieceDetail from '../artPieceDetail/ArtPieceDetail';

function ArtPiece(props) {
    //console.log(props.data.id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div class="zoom">
            <Card style={{ width: '18rem', height: '400px',border:'none'}} >
                <Card.Img title="Click Me!" onClick={handleShow} variant="top" src={`${props.data.image}`} style={{ height: '400px', objectFit: 'cover'}} />
            </Card>
            <ArtPieceDetail DetailData={props.data} artkey={props.data.id} handleClose={handleClose} handleShow={handleShow} show={show} commentHandler={props.commentHandler} />

        </div>
    )
}

export default ArtPiece;

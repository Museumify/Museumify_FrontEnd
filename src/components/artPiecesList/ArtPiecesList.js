import React from "react";
import './ArtPiecesList.css';
import ArtPiece from '../artPiece/ArtPiece'

function ArtPiecesList(props) {
    return (
        <div className="main"
            style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '100px',
                justifyContent: 'center',marginLeft:'50px',marginTop:'200px'
            }}
        >
            {props.data.slice(0, 104).map((obj, i) => {
                if (obj.hasOwnProperty('image') && obj.id !== 149768 && obj.id !== 138464
                    && obj.id !== 117032 && obj.id !== 149410 && obj.id !== 148758 &&
                    obj.id !== 150389 && obj.id !== 111811 && obj.id !== 142792 && obj.id !== 159234
                    && obj.id !== 113202 && obj.id !== 98627 && obj.id !== 145463 && obj.id !== 144743
                    && obj.id !== 169187 && obj.id !== 141644) {
                    return <ArtPiece key={i} data={obj} commentHandler={props.commentHandler} />;
                } else {
                    return null;
                }
            })}
        </div>
    );




}

export default ArtPiecesList;

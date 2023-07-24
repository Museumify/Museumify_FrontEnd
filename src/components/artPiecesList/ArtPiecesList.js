import React from 'react';
import './ArtPiecesList.css';
import ArtPiece from '../artPiece/ArtPiece';

function ArtPiecesList(props) {
  return (
    <div className="main">
      {props.data.map((obj, i) => (
        <ArtPiece key={i} data={obj} commentHandler={props.commentHandler} />
      ))}
    </div>
  );
}

export default ArtPiecesList;

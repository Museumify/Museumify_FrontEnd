import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import ArtPiecesList from '../artPiecesList/ArtPiecesList';

function Home({ searchUrl }) {
  const [data, setData] = useState([]);

  async function getArtPieces(searchUrl) {
    console.log(searchUrl);
    if (searchUrl == null) {
      searchUrl = process.env.REACT_APP_SERVER_URL;
    }
    console.log(searchUrl);
    const response = await fetch(`${searchUrl}`);
    const arts = await response.json();

    // data receieved for homeURL (array) not the same type as searchUrl (object has the array)

    var responseData;
    if (searchUrl.includes('artists') || searchUrl.includes('culture')) {
      responseData = arts?.data ?? [];
    } else {
      responseData = arts;
    }

    console.log('arts', responseData);
    setData(responseData);
  }
  function commentHandler(newArt, id) {
    data.map((art) => {
      if (art.id === id) {
        art.comment = newArt.userComment;
        return art;
      } else {
        return art;
      }
    });
  }
  useEffect(() => {
    getArtPieces(searchUrl);
  }, [searchUrl]);
  return (
    <div>
      <ArtPiecesList data={data} commentHandler={commentHandler} />
    </div>
  );
}

export default Home;

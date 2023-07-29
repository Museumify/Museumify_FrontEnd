import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import ArtPiecesList from '../artPiecesList/ArtPiecesList';
import Slider from './Slider';

function Home({ searchUrl }) {
  const [data, setData] = useState([]);

  async function getArtPieces(searchUrl) {
    console.log(searchUrl);
    var responseData;
    if (searchUrl == null) {
      searchUrl = process.env.REACT_APP_SERVER_URL;
      const response = await fetch(`${searchUrl}`);
      const arts = await response.json();
      responseData = arts;
    } else {
      // searchUrl = searchUrl;
      const response = await fetch(`${searchUrl}`);
      const arts = await response.json();
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
    <div style={{margin:'8px',marginTop:'25px'}} >
    <Slider/>
</div>
    <div>
      <ArtPiecesList data={data} commentHandler={commentHandler} />
    </div>

    </div>
  );
}

export default Home;

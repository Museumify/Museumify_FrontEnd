import React from 'react'
import './Home.css'; 
import {useState,useEffect } from "react"; 
import ArtPiecesList from '../artPiecesList/ArtPiecesList';



function Home(){
    const [data, setData] = useState([]);
    async function getArtPieces(){
        const url =process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/`);
        const arts = await response.json();
       setData(arts)
    }
    function commentHandler(newArt,id){
        data.map((art) => {
            if(art.id === id){
                art.comment = newArt.userComment;
              return art;
            }else{
              return art;
            }
          })
      }
    useEffect(() => {
        getArtPieces()
        
    }, []);
    return(
        <div>Home
            <ArtPiecesList data={data} commentHandler={commentHandler}/>
        </div>
        
    )
}

export default Home;
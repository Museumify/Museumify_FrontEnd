import React from 'react'
import './Home.css'; 
import {useState,useEffect } from "react"; 
import ArtPiecesList from '../artPiecesList/ArtPiecesList';
import Slider from './Slider';



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
        <div >
            <div style={{margin:'8px',marginTop:'25px'}} >
                <Slider/>
            </div>
             <div>
            <ArtPiecesList data={data} commentHandler={commentHandler}/>
            </div>
        </div>
       
        
    )
}

export default Home;
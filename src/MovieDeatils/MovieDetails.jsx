import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movDetails, setMovDetails] = useState({});

  let params = useParams();

  async function getMovDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=bf71e48bdebba34a48b172105844bae9&language=en-US`
    );
   
    setMovDetails(data);
  }


  useEffect(() =>{
    getMovDetails();
    return () => {
        getMovDetails();
    }
  }, [])

  return (
    <>
      <div className="row">
   
              <div className="col-md-5">
                <img style={{height:'70%'}} className="w-100 py-2 mt-3" src={"https://image.tmdb.org/t/p/w500" + movDetails.poster_path} alt='movie'/>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-6">
                <div className="details py-2 mt-3">
                     <h3 className="text-center"> {movDetails.title}</h3>
                      

                      <h4 className="my-4"> vote_average : {movDetails.vote_average}</h4> 
                      <h4 className="my-4"> vote_count : {movDetails.vote_count}</h4> 
                      <h4 className="my-4"> popularity : {movDetails.popularity}</h4> 
                      <h5 className="my-4"> release_date : {movDetails.release_date}</h5>
                      <p className="mt-4 fs-4">{movDetails.overview}</p>

                       
                 
                </div>
              
              </div>
         
 
   
      </div>
    </>
  );
}

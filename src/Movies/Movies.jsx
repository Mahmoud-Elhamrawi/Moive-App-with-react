import React from 'react'
import { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

export default function Movies() {
const [dataMovies , setDataMovies] = useState([])
const [dataTv , setdataTv] = useState([])
 

async function getMovies(){
  let {data} =  await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=bf71e48bdebba34a48b172105844bae9`)

  setDataMovies(data.results);

}

async function getTv(){
  let {data} =  await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=bf71e48bdebba34a48b172105844bae9`)

  setdataTv(data.results);

}

useEffect(() => {
  getMovies();
  getTv();
  return () => {
    getMovies();
    getTv();
  }
}, [])



  return (
    <>
     
    <div className="row mt-4 ms-2">

      <div className="col-md-3  mt-4">
        <hr style={{width:'35px'}} />
            <h2>trending <br/>Movies<br/> to watch now</h2>
            <p>most watched movies by days</p>
            <hr />

      </div>
      {dataMovies.map((ele,ind)=>{return (
          <div key={ind} className='col-md-3 text-center'>
           <Link to={`/movieDetails/${ele.id}`}>
            <img style={{width:'200px' , height:'200px'}} className=' img-fluid' src={'https://image.tmdb.org/t/p/w500' + ele.poster_path} alt="movies" />
            <h2>{ele.title? ele.title:ele.name }</h2>
            
            </Link>
          </div>
        
      )}).slice(0,11)}

      <hr className='my-5'/>
      <div className="col-md-3  mt-4">
        <hr style={{width:'35px'}} />
            <h2>trending <br/>Tv<br/> to watch now</h2>
            <p>most watched movies by days</p>
            <hr  />

      </div>

      {dataTv.map((ele,ind)=>{return (
          <div key={ind} className='col-md-3 text-center'>
            <Link to={`/movieDetails/${ele.id}`}>
              <img style={{width:'200px' , height:'200px'}} className='w-100' src={'https://image.tmdb.org/t/p/w500' + ele.poster_path} alt="movies" />
              <h2>{ele.title? ele.title:ele.name }</h2>
            </Link>
          </div>
        
      )}).slice(0,11)}
    </div>








    </>
  )
}

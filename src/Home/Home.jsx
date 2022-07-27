import React from 'react';
import style from  './Home.module.css';

export default function Home() {


 
  
  return (
    <> 
      <div className={style.home}>
        <div className="row mt-5 p-5">
       

      
          <div className="col-md-5">
            <h4>Welcome <br/>
               Millions of movies, TV shows and people to discover. Explore now.</h4>
               <p style={{marginTop:'50px' , lineHeight:'2.1' , fontSize:'20px'}}>Using API <q>https://developers.themoviedb.org</q><br/> Welcome to version 3 of The Movie Database (TMDB) API. Below you will find a current list of the available methods on our movie, tv, actor and image API. If you need help or support, please head over to our .</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            
          </div>
        </div>
        </div>
    </>
  )
}

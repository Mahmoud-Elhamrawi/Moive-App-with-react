import "./App.css";
import Navbar from "./Navbar/Navbar";
import { useNavigate, Route, Routes ,Navigate} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Movies from "./Movies/Movies";
import NotFound from "./NotFound/NotFound";
import Registre from "./Register/Registre";
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";
import MovieDetails from './MovieDeatils/MovieDetails';



function App() {
  const [dataUser , setDatauser]=useState(null);
  let Navigates = useNavigate()

useEffect(()=>{

 if(localStorage.getItem('userToken'))
 {
  getUserData();
 }

},[])


  function getUserData()
  {

    let dataDecoded = jwtDecode(localStorage.getItem('userToken'));
     setDatauser(dataDecoded);
     
     return dataUser;
  }


  function lgout()
  {
    localStorage.removeItem('userToken');
    setDatauser(null);
    Navigates('/login');
  }


  function ProtectedRoute({children}){
  if(! localStorage.getItem('userToken'))
  {
    return <Navigate to='/login'/>
  }else{
    return children ;
  }

  }


  return (
    <>
      <Navbar dataUser={dataUser}  lgout={lgout}/>
      <div className="container">
        <Routes>
          <Route path="/"  element={<ProtectedRoute> <Home/>  </ProtectedRoute>   } />
          <Route path="home"  element={<ProtectedRoute><Home /> </ProtectedRoute>} />
          <Route path="about"  element={<ProtectedRoute><About /> </ProtectedRoute>} />
          <Route path="movies"  element={<ProtectedRoute> <Movies/> </ProtectedRoute>} />
          <Route path="movieDetails"  element={<ProtectedRoute> <MovieDetails/> </ProtectedRoute>} >
            <Route path=":id" element={<ProtectedRoute> <MovieDetails/> </ProtectedRoute>} />
          </Route>
   
          <Route path="register"  element={<Registre/>} />
          <Route path="login"  element={<Login  getUserData={getUserData}/>} />
          <Route path="*"  element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

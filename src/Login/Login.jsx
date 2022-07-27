import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  Joi  from 'joi';




export default function Login(props) {


  const [user, setUser] = useState({

    email : " ",
    password : " ",
  });


  const [errorApi,setErrorApi] =useState('');
  let   Navigate = useNavigate();
  const [Isload , setIsload] = useState(false);
  const [ErrorList , setErrorList] = useState([]);



  function addUSer(e)
  {
      let myUser = {...user};
      myUser[e.target.name] = e.target.value ; 
      setUser(myUser)
  
  
  }
  



  async function submitForm(e)
  {
    e.preventDefault();
    setIsload(true);
    let resulatValid = validInputsRegister(user);
            console.log(resulatValid);
    if(resulatValid.error)
    {
        setErrorList(resulatValid.error.details)
    }else{
             let {data} = await axios.post(`https://routeegypt.herokuapp.com/signin`,user);
   
      if(data.message === 'success')
       { 
        setIsload(false);
        console.log(data.token);
        localStorage.setItem('userToken',data.token);
        console.log(props.getUserData());

         Navigate(`/home`); 
       }
       else{
        setIsload(false);
        setErrorApi(data.message)
       }

     }
   


  }


  function validInputsRegister(user)
    {
         let  x = Joi.object({

           
            email :Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password : Joi.string().pattern(/^[A-Z][a-z]{3,20}$/),
        });
      return  x.validate(user, {abortEarly:false} ); 
    }
















  return (
<>

<h2 className="my-4">login now </h2>
           
             {errorApi? <div className="alert alert-danger text-center  fs-3">{errorApi.substring(errorApi.lastIndexOf(':')+1 ,)}</div> :''}
              {ErrorList.map( (ele,ind) => <div key={ind} className='alert alert-danger text-center'>{ele.message}</div> )}
      <form className="w-75 mx-auto"  onSubmit={submitForm}>
  


    
        <div className="form-group my-3">
          <label htmlFor="email">email : </label>
          <input
              onChange={addUSer}
            type="email"
            id="email"
            name="email"
            className="form-control my-2"
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="password">password : </label>
          <input
              onChange={addUSer}
            type="password"
            id="password"
            name="password"
            className="form-control my-2"
          />
        </div>

        <button className="btn btn-outline-info d-block mx-auto">
          {Isload?<i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>:'login'}   
        </button>
      </form>








</>

  )
}

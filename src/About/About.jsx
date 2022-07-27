import React from "react";

import imgs  from  '../imgs/me.jpg'


export default function About() {
  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <div className="about my-2 py-5">
            <h1 style={{ color:'yellow'}}>  Mahmoud Rashad ElHamrawi </h1>
            <h2><q>  Frontend and cross-platform mobile developer  </q> </h2>
         
            <h5 className="my-3"> Address : El syouif , Alexandria ,Egypt</h5>

            <h2 style={{marginTop:'40px' , color:'yellow'}}> Career Objective :</h2>
              <hr />
            <p className="fs-3">
              Seeking a Web Developer position in a stable company where I can
              use my skills to benefit the company.
            </p>
            <h2 style={{marginTop:'40px' , color:'yellow'}}> Contact me : </h2>
              <hr />
              <h5 className="my-3"> LinkedIn:   www.linkedin.com/in/mahmoud-rashad-elhamrawi-9761a8105</h5>
              <h5 className="my-3">	GitHub :   https://github.com/Mahmoud-Elhamrawi</h5>
              <h5 className="my-3">Phone : +20- 01278385814 </h5>
            <h5 className="my-3"> Email : mahmoudelhamrawi5@gmail.com</h5>
          </div>
        </div>
        <div className="col-md-3">
          <img src={imgs}  className="w-100 rounded-circle mt-5" alt="me"  />
        </div>
      </div>
    </>
  );
}

import React from "react";
import logoImg from '../imgs/online-cinema-icon-logo-vector-9543986.jpg'
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-transparent py-3 fs-4">
        <div className="container">
          <Link className="navbar-brand" to="home">
           <img src={logoImg} style={{width:'80px' , height:'50px'}} className="rounded-circle" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.dataUser ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="home">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="about">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="movies">
                    trending
                    </Link>
                  </li>

             
                </>
              ) : (
                ""
              )}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  d-flex align-items-cennter justify-content-center  ">
              {props.dataUser ? (
                <>
                  <li className="nav-item">
                    <span onClick={props.lgout}>
                      LogOut
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <div
                    style={{ marginTop: "12px" }}
                    className="socailIcons  me-5"
                  >
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-youtube mx-3"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-behance mx-3"></i>
                  </div>

                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

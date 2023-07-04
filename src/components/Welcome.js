import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import fac from "./fac1.png";
import stu from "./graduated.png";
import ad from "./ad.png";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <React.Fragment>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h1 className="text-center text-danger text-capitalize my-5  ">
     
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card">
              <img src={fac} class="card-img-top" height="300px" />
              <div class="card-body">
                <h3 class="card-title text-xl-center font-weight-bold font-italic ">
                  FACULTY
                </h3>  <hr />
                <div className="row d-flex justify-content-center align-content-center ">
                  <Link to={"faculty/login"} className="nav-link">
              
                  <h4>LOGIN</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img src={stu} class="card-img-top" height="300px" />

              <div class="card-body">
                <h3 class="card-title text-center font-weight-bold font-italic">
                  STUDENT
                </h3>  <hr />
                <p class="card-text"></p>
                <div className="row d-flex justify-content-center align-content-center ">
                <Link to={"login"} className="nav-link">
                <h4>LOGIN</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img src={ad} class="card-img-top" height="300px" />
              <div class="card-body">
                <h3 class="card-title text-xl-center font-weight-bold font-italic">
                  ADMIN
                </h3>
                <hr />
                <p class="card-text"></p>
                <div className="row d-flex justify-content-center align-content-center ">
                <Link to={"admin/login"} className="nav-link">
                    <h4>LOGIN</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
 

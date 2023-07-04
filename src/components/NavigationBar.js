import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../services/index";
import { useEffect } from "react";

const NavigationBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isLoggedIn=window.localStorage.getItem("stuloggedIn");
  const username=window.localStorage.getItem("stuusername");
  const role=window.localStorage.getItem("sturole");

  const [code, setCode] = useState("");

  const logout = () => {
    dispatch(logoutUser());
  };
  useEffect(() => {
    navbarstu();
  },[]);

  const guestLinks = (
    <>
      <div className="mr-auto"></div>
      <Nav className="navbar-right">
        <Link to={"register"} className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Register
        </Link>
        <Link to={"login"} className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
        <Link to={"/"} className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Home
        </Link>
      </Nav>
    </>
  );
  const userLinks = (
    <>
      <Nav className="mr-auto">
        <Link to={"Home"} className="nav-link">
          Dashboard
        </Link>
        <Link to={"Practice"} className="nav-link">
          Practice
        </Link>
        <Link to={"users"} className="nav-link">
          
        </Link>
      </Nav>
      <Nav className="navbar-right">
      <Link to={"username"} className="nav-link">
          {username}
        </Link>
        <Link to={"/"} className="nav-link" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
      </Nav>
    </>
  );
const navbarstu = () => {
if(isLoggedIn === "true" && role === "student")
{
  setCode(userLinks)
}
else{
 setCode(guestLinks)
}
};
  return (
    <Navbar bg="light" variant="light">
      <Link to={isLoggedIn ? "home" : ""} className="navbar-brand">
        <img
          src={pic}
          width="50"
          height="50"
          alt="brand"
        />{" "}
      PTU CODING AND MONITORING PLATFORM
      </Link >
     
     {code}
      {/* {isLoggedIn ? userLinks : guestLinks} */}
    </Navbar>
  );
};

export default NavigationBar;

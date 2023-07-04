import React from "react";
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
import { logoutUser } from "../Aservices/index";

const NavigationBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isLoggedIn=window.localStorage.getItem("adminloggedIn");
  const username=window.localStorage.getItem("adminusername");
  const logout = () => {
    dispatch(logoutUser());
  };

  const guestLinks = (
    <>
    
      <Nav className="mr-auto">
        <Link to={"register"} className="nav-link">
          Add Student
        </Link>
        <Link to={"fregister"} className="nav-link">
          Add faculty
        </Link>
        <Link to={"admin/addC"} className="nav-link">
      
        </Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to={"logout"} className="nav-link" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
      </Nav>
      {/* <Nav className="navbar-right">
        <Link to={"faculty/register"} className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Admin 
        </Link>
        <Link to={"login"} className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Admin Login
        </Link>
      </Nav> */}
    </>
  );
  const userLinks = (
    <>
      <Nav className="mr-auto">
        <Link to={"register"} className="nav-link">
          Add Student
        </Link>
        <Link to={"fregister"} className="nav-link">
          Add faculty
        </Link>
        <Link to={"admin/addC"} className="nav-link">
      
        </Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to={"logout"} className="nav-link" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
      </Nav>
    </>
  );

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
      </Link>
      {isLoggedIn ? userLinks : guestLinks}
    </Navbar>
  );
};

export default NavigationBar;

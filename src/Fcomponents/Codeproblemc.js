import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import "./Codeproblem.css"
import Sidebar from "./Sidebar";
import Cprg from './Cprg';
import empService from ".././Codeproblems/code.service";
import Popup from "./Popup";
import {Button}from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,

} from "@fortawesome/free-solid-svg-icons";
const Codeproblemc =() => {
    const initialValues = {
        codetype: '',
        question: '',
        testcase1: '',
      };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
const[openPopup,setOpenPopup] = useState(false);

 
  const validationSchema = Yup.object().shape({
    codetype: Yup.string().required('Code type is required'),
    question: Yup.string().required('Question is required'),
    testcase1: Yup.string().required('Test case is required'),
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const submitStu = (e) => 
  {
    e.preventDefault();
    empService
    .saveEmp(values).then((res) => {
      setValues({
        codetype: "",
        question: "",
        testcase1: "",
        
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

   
    return (
        <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          <div className="col-2 bg-white vh-100">
            <Sidebar />
            </div>
            <div className="col">
            <div className="px-3">
 
      <button onClick={() => setOpenPopup(true)}>
      Add c code problem
    </button>

      <Popup
      title="Add Code Problem"
        openPopup ={openPopup}
        setOpenPopup={setOpenPopup}>
          <Cprg/>
        </Popup>
      </div>
      </div>
      </div>
      </div>
    
    );
  }

export default Codeproblemc;

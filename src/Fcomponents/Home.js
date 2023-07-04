import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Popup from "./Popup";
import Cprg from './Cprg';
import Cplusprg from "./Cplusprg"
import Pythoncodeadd from "./Pythoncodeadd";

import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import { Alert } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import empService from ".././services/stu.service";
import facService from "../Fservices/fac.service";
import { Button } from "@material-ui/core";
import Addassessment from "./Addassessment";
const Home = () => {
  const [empList, setEmpList] = useState([]);
  const [getList, List] = useState([]);
  const [msg, setMsg] = useState("");
  const auth = useSelector((state) => state.auth);
  const uname=window.localStorage.getItem("facusername");
  //console.log(uname);
  if (localStorage.Token) {
    authToken(localStorage.Token);
 }
 
useEffect(() => {
    getstu(uname);
}, []);
   
const getstu = (uname) => {

  facService
    .getStudents(uname)
    .then((res) => {
      console.log(res.data);
      setEmpList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

  const deleteEmp = (id) => {
    empService
      .deleteEmp(id)
      .then((res) => {
        setMsg("Delete Sucessfully");
        //init();
      })
      .catch((error) => {
        console.log(error);
      });
  };
const[openPopupc,setOpenPopupc] = useState(false);
const[openPopup,setOpenPopup] = useState(false);
const[openPopuppy,setOpenPopuppy] = useState(false);

const[openPopupas,setOpenPopupas] = useState(false);

  return (
    <div className="container-fluid bg-secondary min-vh-100">
    <div className="row">
      <div className="col-2 bg-white vh-100">
        <Sidebar />
        
      </div>
      <div className="col">
        <div className="px-3">
          &nbsp;&nbsp;
          <p className="text-white h3">Students List</p>
         <p className="text-center text-success"></p> &nbsp;
         &nbsp;
         &nbsp;

          <table class="table caption-top bg-white rounded mt -2">
            <thead className="thead-dark">
              <tr>
                <th scope="col">SL.NO</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student ID</th>
                <th scope="col">Register Number</th>
                <th scope="col">Email ID</th>
                <th scope="col">Last Login </th>
                <th scope="col">Total Points</th>
                <th>C Lang points</th>
                <th>C++ points</th>
                <th>Python points</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody> 
            {empList.map((e, num) => (
                  <tr>
                    <th scope="row">{num + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.id}</td>
                    <td>{e.mobile}</td>
                    <td>{e.email}</td>
                    <td>{e.lastlogindate}</td>
                    <td>{e.points}</td>
                    <td>{e.c}</td>
                    <td>{e.cplus}</td>
                    <td>{e.python}</td>

                    
                    <td>
                      <Link
                        to={"editStu/" + e.id}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>
                      <a
                        onClick={() => deleteEmp(e.id)}
                        className="btn btn-sm btn-danger ms-2"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        <p  className="text-white h3">Add Code Problems</p>
<br/>
      <Button className="bg-white" onClick={() => setOpenPopupc(true)}>
      Add c code problem
    </Button>
    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    <Button className="bg-white" onClick={() => setOpenPopup(true)}>
      Add c++ code problem
    </Button>
    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    <Button className="bg-white" onClick={() => setOpenPopuppy(true)}>
      Add Python code problem
    </Button>

    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
    <Button className="bg-white" onClick={() => setOpenPopupas(true)}>
      Add Assessment
    </Button>
        </div>
      </div>
      <div></div>
    </div>
    
      <Popup
      title="Add C Language Code Problem"
        openPopup ={openPopupc}
        setOpenPopup={setOpenPopupc}>
          <Cprg/>
        </Popup>


        <Popup
      title="Add C++ Language Code Problem"
        openPopup ={openPopup}
        setOpenPopup={setOpenPopup}>
          <Cplusprg/>
        </Popup>


        <Popup
      title="Add Python Language Code Problem"
        openPopup ={openPopuppy}
        setOpenPopup={setOpenPopuppy}>
          <Pythoncodeadd/>
        </Popup>


        <Popup
      title="Add Assessment"
        openPopup ={openPopupas}
        setOpenPopup={setOpenPopupas}>
          <Addassessment/>
        </Popup>



  </div>
  );
};
export default Home;

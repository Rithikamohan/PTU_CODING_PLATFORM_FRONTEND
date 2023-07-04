import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import { Alert } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import empService from ".././services/stu.service";
import facService from ".././Fservices/fac.service";
import { Link } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import DataTable from "react-data-table-component";

const Home = () => {
  const [empList, setEmpList] = useState([]);
  const [names, setNames] = useState([]);
  const [points, setPoints] = useState([]);

  const [getList, List] = useState([]);
  //fac
  const [facList, setFacList] = useState([]);
  const [getFList, Fac] = useState([]);
  const [msgF, setFMsg] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
    count();
    initF();
    countF();
    stunames();
    stupoints();
  }, []);
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }
  //stu
  const count = () => {
    empService
      .getcount()
      .then((res) => {
      //  console.log(res.data);
        List(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const column =[
    {
      name:"ID",
      selector : row => row.id
    },
    {
      name:"Email",
      selector : row => row.email
    }, {
      name:"Name",
      selector : row => row.name
    }
  ] 
   const init = () => {
    let arr=[];
    empService
      .getAllEmp()
      .then((res) => {
    //console.log(res.data);
        setEmpList(res.data);
console.log(empList);
      })
    
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteEmp = (id) => {
    empService
      .deleteEmp(id)
      .then((res) => {
        toast.success('Deleted Successfully!!!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        init();
        count();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const stunames = () => {
    empService
      .getallstuname()
      .then((res) => {
     //   console.log("points "+ res.data);
      setNames(res.data);
      console.log("names: "+names)
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  const stupoints = () => {
    empService
      .getallstupoints()
      .then((res) => {
     //   console.log("points "+ res.data);
      setPoints(res.data);
      //console.log("names: "+names)
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  //stu end

  //fac
  const countF = () => {
    facService
      .getcount()
      .then((res) => {
        console.log(res.data);
        Fac(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const initF = () => {
    facService
      .getAllFac()
      .then((res) => {

        console.log(res.data);
        setFacList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFac = (id) => {
    facService
      .deleteFac(id)
      .then((res) => {
        setFMsg("Delete Sucessfully");
        initF();
      })
      .catch((error) => {
        console.log(error);
      });
  };
//end fac

     const data = {
      labels: names,
    
      datasets: [
        {
          axis:'y',
          label: "Student Report",
          data: points,
          backgroundColor: ["rgb(255, 99, 132)",
          'rgba(255, 159, 64, 200)',
          'rgba(255, 205, 86, 200)',
          'rgba(75, 192, 192, 200)',
          'rgba(54, 162, 235, 200)',],
          borderColor: "rgb(255, 99, 132)",

        },
      ],
    };
 
    const sidebarStyles = {
      //height: '100vh',
      overflowY: 'auto'
    };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div style={sidebarStyles} className="col-2 bg-white ">
          <Sidebar />
        </div>
        <div className="col">
          <div className="px-3">
            <div className="container-fluid">
              <div className="row g-3 my-3">
                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{getList}</h3>

                      <p className="fs-5">Total Students</p>
                    </div>
                    <i class="fas fa-users  fa-lg"></i>
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{getFList}</h3>
                      <p className="fs-5">Total Facultys</p>
                    </div>

                    <i class="fas fa-chalkboard-teacher  fa-lg"></i>
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">10</h3>
                      <p className="fs-5">Total Code Problems</p>
                    </div>
                    <i className="bi-file-earmark-code fa-lg"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div style ={{marginLeft:"35%" }}className="col-md-4 bg-white" > 
            <Bar data={data} width={"1500%"} height={"1000%"} /> </div>

            {/* //table */}
            <p className="text-white h3">Students List</p>
            {msg && <p className="text-center text-success">{msg}</p>}



            <table class="table caption-top bg-white rounded mt -2">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Student ID</th>
                  <th scope="col">Register Number</th>
                  <th scope="col">Email ID</th>
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

            <p className="text-white h3">Faculty List</p>
            

            <table class="table caption-top bg-white rounded mt -2">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Student ID</th>
                  <th scope="col">Register Number</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {facList.map((e, num) => (
                  <tr>
                    <th scope="row">{num + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.id}</td>
                    <td>{e.mobile}</td>
                    <td>{e.email}</td>
                    <td>
                      <Link
                        to={"editStu/" + e.id}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>
                      <a
                        onClick={() => deleteFac(e.id)}
                        className="btn btn-sm btn-danger ms-2"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
          <ToastContainer />
        </div>
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  );
};

export default Home;

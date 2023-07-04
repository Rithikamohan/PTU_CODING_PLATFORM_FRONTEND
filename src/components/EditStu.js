import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import empService from ".././services/stu.service";
import { Link } from "react-router-dom";

const EditStu = (props) => {
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    faculty: "",
  });
  const [msg, setMsg] = useState("");

  const data = useParams();
  //const navigate = useNavigate();

  useEffect(() => {
    empService
      .getEmpById(data.id)
      .then((res) => {
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmp({ ...emp, [e.target.name]: value });
  };

  const updateEmp = (e) => {
    e.preventDefault();
    empService
      .updateEmp(emp.id, emp)
      .then((res) => {
         props.history.push("/home");
        setMsg("updated successfully")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar />
          </div>
          <div className="col">
          <div className="px-3">

          <div style ={{marginTop:"10%", marginRight:"1000%" }} className="container-fluid ">
              {/* <div className="row g-3 my-3">
                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div> */}

            <div style ={{marginRight:"10%" ,marginLeft:"10%" }} className="card">
              <div className="card-header text-center fs-3">
                Edit Student 
                {msg && <p className="text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <form onSubmit={(e) => updateEmp(e)}>
                  <div className="mb-3">
                    <label>Enter First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={emp.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                <div className="mb-3">
                    <label>Enter Email </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={emp.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Register number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={emp.mobile}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Faculty</label>
                    <input
                      type="text"
                      className="form-control"
                      name="salary"
                      value={emp.faculty}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="text-center">
                    <button className="btn btn-success">Submit</button>
                    <input
                      type="Reset"
                      className="btn btn-danger ms-2"
                      value="Reset"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </div>
    </div>
    // </div>
    // </div>
    // </div>
    // </div>


  );

};

export default EditStu;
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import empService from "../../services/stu.service"

const EditStu = () => {
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center fs-3">
                Edit Emp
                {msg && <p className="text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <form onSubmit={(e) => updateEmp(e)}>
                  <div className="mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={emp.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Register number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={emp.mobile}
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
                    <label>Enter id</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={emp.id}
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
  );
};

export default EditStu;
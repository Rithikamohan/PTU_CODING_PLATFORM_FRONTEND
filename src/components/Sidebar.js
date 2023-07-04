import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">STUDENT PTU</span>
      </div>
    
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <Link to={"Home"}>
          <span>Dashboard</span>
          </Link>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i>
          <Link to={"cprg"}>
            <span>C language Analysis</span>{" "}
          </Link>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i>
          <Link to={"cplusprg"}>
          <span>C++ language Analysis</span>
          </Link>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <Link to={"pyanalysis"}>
          <span>Python Language Analysis</span>
          </Link>
        </a>

        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <Link to={"assessment"}>
          <span>Take Assessment</span>
          </Link>
        </a>
      
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>{" "}
      </div>
      
    </div>
  );
}
export default Sidebar;
